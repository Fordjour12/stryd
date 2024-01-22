import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  btnIcon: {
    position: "absolute",
    left: 16,
  },
  btn: {
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.coral,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    // padding: 16,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
  },
});
