import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/hooks/useAuth";

const signup = () => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [dob, setDob] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [fullName, setFullName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const { top } = useSafeAreaInsets();
  const [formattedDate, setFormattedDate] = useState<string>();
  const { signUp, isLoading } = useAuth();
  const signMeUp = () => {
    if (username && password && dob && email && fullName && phone) {
      signUp({ username, password, fullName, phone, dob, email });
    } else {
      ToastAndroid.show(
        "Please fill out the form correctly",
        ToastAndroid.LONG
      );
    }
  };
  return (
    <View style={{ paddingTop: top, flex: 1, padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.image}
          />
          <Text style={[styles.title]}>Create account</Text>
        </View>
        <View>
          <Text style={[styles.label]}>Full Name :</Text>
          <TextInput
            onChangeText={setFullName}
            placeholder="Enter your full name"
            style={[styles.inputField]}
          />
          <Text style={[styles.label]}>Username :</Text>
          <TextInput
            onChangeText={setUserName}
            placeholder="Enter a username"
            style={[styles.inputField]}
          />
          <Text style={{ marginHorizontal: 3 }} className="text-blue-300">
            Please note down that you will login to the app with the registered
            username.
          </Text>
          <Text style={[styles.label]}>Password :</Text>
          <TextInput
            onChangeText={setPassword}
            placeholder="Enter your password"
            style={[styles.inputField]}
          />
          <Text style={[styles.label]}>Email :</Text>
          <TextInput
            onChangeText={setEmail}
            placeholder="Enter an email address"
            style={[styles.inputField]}
          />
          <Text style={[styles.label]}>Phone :</Text>
          <TextInput
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            style={[styles.inputField]}
          />
          <Text style={[styles.label]}>Date of birth :</Text>
          <TextInput
            onChangeText={setDob}
            value={formattedDate}
            placeholder="Enter your Date of Birth"
            style={[styles.inputField]}
          />
          <TouchableOpacity
            style={[
              defaultStyles.btn,
              { backgroundColor: Colors.primary, marginTop: 15 },
            ]}
            onPress={signMeUp}
          >
            <Text
              style={{
                color: "#fff",
                flex: 1,
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Create
            </Text>
            {isLoading ? (
              <ActivityIndicator color={"white"} />
            ) : (
              <Ionicons name="arrow-forward-circle" size={20} color={"white"} />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  label: {
    color: "#00afec",
    marginTop: 10,
  },
});
export default signup;
