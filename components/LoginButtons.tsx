import { View, Text, StyleSheet, Touchable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const LoginButtons = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <Text style={[styles.title]}>Welcome to Study Scape</Text>
      <Link
        href={{ pathname: "login", params: { type: "login" } }}
        style={[defaultStyles.btn, styles.btn_dark]}
        asChild
      >
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              textAlign: "center",
              flex: 1,
            }}
          >
            Login
          </Text>
          <AntDesign name="login" size={24} color="white" />
        </TouchableOpacity>
      </Link>
      <Link
        href={{ pathname: "login", params: { type: "create_account" } }}
        style={[defaultStyles.btn, styles.btn_light]}
        asChild
      >
        <TouchableOpacity>
          <Text
            style={{
              color: "#050C9C",
              fontWeight: "600",
              textAlign: "center",
              flex: 1,
            }}
          >
            Create account
          </Text>
          <Ionicons name="person-add-outline" size={24} color="#050C9C" />
        </TouchableOpacity>
      </Link>
      <Text
        style={{
          fontSize: 12,
          textAlign: "center",
          padding: 10,
          color: Colors.grey,
        }}
      >
        Using someone else's account credential may lead to temporary and
        permanent account blockage
      </Text>
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
    backgroundColor: "#050C9C",
    color: Colors.light,
  },
  btn_light: {
    backgroundColor: Colors.light,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#050C9C",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    fontWeight: "600",
  },
});
