import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Shared/Colors";
import { styles } from "./login.style";

export default function Login() {
  return (
    <View>
      <Image source={require("./../assets/images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.wlecomeText}>Welcome to Education App</Text>
        <View>
          <Text style={styles.loginText}>Login/Signup</Text>
          <View style={styles.btn}>
            <Ionicons name="logo-google" size={24} color={Colors.white} />
            <Text style={styles.btnText}>Sign In with Google</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
