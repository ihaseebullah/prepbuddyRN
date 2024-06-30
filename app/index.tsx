import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const signup = () => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [dob, setDob] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [fullName, setFullName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top, flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.image}
        />
        <Text style={[styles.title]}>Create account</Text>
      </View>
      <View>
        <Text style={[styles.label]}>
          Full Name :
        </Text>
        <TextInput
          onChangeText={setFullName}
          placeholder="Enter your full name"
          style={[styles.inputField]}
        />
         <Text style={[styles.label]}>
          Username :
        </Text>
        <TextInput
          onChangeText={setFullName}
          placeholder="Enter a username"
          style={[styles.inputField]}
        />
        <Text style={{ marginHorizontal: 3 }} className="text-blue-300">
          Please note down that you will login to the app with the registered
          username.
        </Text>
        <Text style={[styles.label]}>
          Password :
        </Text>
        <TextInput
          onChangeText={setPassword}
          placeholder="Enter your password"
          style={[styles.inputField]}
        />
         <Text style={[styles.label]}>
          Date of birth :
        </Text>
        <TextInput
          onChangeText={setPassword}
          placeholder="Enter your password"
          style={[styles.inputField]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    padding: 10,
    color: "#00afec",
    fontWeight: "700",
  },
  inputField: {
    marginTop: 8,
    borderColor: "#00afec",
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  image: {
    height: 70,
    width: 70,
  },
  label:{
    color: "#00afec",
    marginTop:10
  }
});
export default signup;
