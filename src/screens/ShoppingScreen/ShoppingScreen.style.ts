import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const shoppingCardStyles = StyleSheet.create({
  container: {
    width: vw(100),
    height: vh(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black"
  },
  shoppingInfo: {
    width: vw(30),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginRight: 20
  },
  shoppingTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 20
  },
  shoppingContents: {
    width: vw(30),
    height: vh(15)
  },
  buttonContainer: {
    width: vw(20),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }
});