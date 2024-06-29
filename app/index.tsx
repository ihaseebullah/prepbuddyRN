import AnimatedIntro from "@/components/AnimatedIntro";
import LoginButtons from "@/components/LoginButtons";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { isSignedIn, signIn } = useAuth();

  useEffect(() => {
    signIn({ username: "ihaseebullah", password: "123" });
  }, []); // Empty dependency array ensures signIn runs only once on component mount

  return (
    <View style={{ flex: 1 }}>
      <AnimatedIntro />
      <LoginButtons />
    </View>
  );
}
