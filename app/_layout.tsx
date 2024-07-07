import { useAuth } from "@/hooks/useAuth";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const segments = useSegments();
  const { isSignedIn } = useAuth();
  const Router = useRouter();
  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    console.log(inAuthGroup + " isSignedIn : " + isSignedIn);
    if (inAuthGroup && !isSignedIn) {
      Router.replace("/");
    } else if (!inAuthGroup && isSignedIn) {
      Router.replace("/(auth)/homePage");
    }
  }, [isSignedIn]);
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}
