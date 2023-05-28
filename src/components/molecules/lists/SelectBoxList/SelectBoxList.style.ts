import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const selectBoxListStyles = StyleSheet.create({
  container: {
    elevation: 5,
    marginTop: 20,
    position: "absolute",
    top: 150,
    height: 300,
    alignSelf: "center",
    width: vw(90),
    backgroundColor: "#fff",
    borderRadius: 10,
  }
});