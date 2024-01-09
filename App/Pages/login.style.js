import { StyleSheet } from "react-native";
import Colors from "../Shared/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -25,
    paddingTop: 80,
  },
  wlecomeText: {
    fontSize: 38,
    paddingHorizontal: 46,
    fontWeight: "500",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    marginBottom: 15,
    marginTop: 100,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  btnText: {
    fontSize: 20,
    color: Colors.white,
  },
});
