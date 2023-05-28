import { vw } from "rxn-units";
import { StyleSheet } from "react-native";

export const selectSearchInputStyles = StyleSheet.create({
  container: {
    width: vw(90),
    height: 50,
    alignSelf: "center",
    borderWidth: 0.2,
    borderColor: "#8e8e8e",
    borderRadius: 7,
    marginTop: 20,
    paddingLeft: 20,
  }
})