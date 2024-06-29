import { View, Text, StyleSheet, Touchable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { TouchableOpacity } from "react-native";

const LoginButtons = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Welcome To prepbuddy</Text>
      <TouchableOpacity style={[defaultStyles.btn, styles.btn_dark]}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[defaultStyles.btn, styles.btn_light]}>
        <Text style={{ color: "#000" }}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButtons;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.light,
    width: "100%",
    gap: 5,
  },
  btn_dark: {
    backgroundColor: Colors.grey,
    color: Colors.light,
  },
  btn_light: {
    backgroundColor: Colors.light,
    borderWidth: StyleSheet.hairlineWidth,
    color: Colors.grey,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    fontWeight: "600",
  },
});
