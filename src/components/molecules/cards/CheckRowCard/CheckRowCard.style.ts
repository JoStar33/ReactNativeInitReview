import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const checkRowCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: vw(98),
    height: vh(30),
    borderWidth: 2,
    backgroundColor: "white"
  },
  checkBoxContainer: {
    margin: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "800"
  },
  textContainer: {
    flexDirection: "column"
  }
});
