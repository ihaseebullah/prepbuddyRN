import AnimatedIntro from "@/components/AnimatedIntro";
import LoginButtons from "@/components/LoginButtons";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <AnimatedIntro />
      <LoginButtons />
    </View>
  );
}
