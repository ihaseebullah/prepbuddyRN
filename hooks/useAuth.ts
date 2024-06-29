import axios from "axios";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export type logins = {
  username: string;
  password: string;
};

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  useEffect(() => {
    checkUserSignedIn();
  }, []);

  async function signIn({ username, password }: logins) {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.61.204:3000/api/auth/login",
        { username, password },
        { headers }
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        await AsyncStorage.setItem("token", token);
        setToken(token);
        setUser(user);
        setIsSignedIn(true);
      }
    } catch (err: any) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function checkUserSignedIn() {
    setIsLoading(true);
    try {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        const decodedToken: any = jwtDecode(storedToken);
        if (decodedToken.exp * 1000 > Date.now()) {
          setToken(storedToken);
          setUser(decodedToken.user);
          setIsSignedIn(true);
        } else {
          await AsyncStorage.removeItem("token");
          setIsSignedIn(false);
        }
      } else {
        setIsSignedIn(false);
      }
    } catch (err) {
      setIsSignedIn(false);
      console.error("Failed to check user signed in status", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem("token");
      setIsSignedIn(false);
    } catch (err) {
      setError("Failed to sign out");
      console.error("Failed to sign out", err);
    }
  }

  return { user, token, isLoading, error, isSignedIn, signIn, signOut };
}
