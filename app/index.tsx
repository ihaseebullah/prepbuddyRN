import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { defaultStyles } from "@/constants/Styles";

const login = () => {
  const { type } = useLocalSearchParams();
  const { top } = useSafeAreaInsets();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ paddingTop: top }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ height: 200, width: 200 }}
        />
      </View>
      <View>
        <Text style={[styles.title]}>Login</Text>
        <TextInput
          onChangeText={setUserName}
          placeholder="Enter your username"
          style={[styles.inputField]}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Enter your password"
          style={[styles.inputField]}
        />
        <TouchableOpacity
          style={[
            defaultStyles.btn,
            { margin: 10, backgroundColor: "#00afec" },
          ]}
          onPress={() => {
            console.log("Logging in....");
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    padding: 10,
    color: "#00afec",
    fontWeight: "700",
  },
  inputField: {
    marginTop: 8,
    borderColor: "#00afec",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
