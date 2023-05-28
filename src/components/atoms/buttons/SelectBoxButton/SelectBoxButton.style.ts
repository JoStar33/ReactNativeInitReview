import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

const selectBoxButtonStyles = StyleSheet.create({
  container: {
    width: vw(90),
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  selectedText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: vw(90) - 30,
    fontWeight:'600'
  }
});

export { selectBoxButtonStyles };