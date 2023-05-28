import React from "react";
import { TextInput } from "react-native";

interface Props {
  handleChange: (text: string) => void;
  search: string;
}

const index = ({handleChange, search}: Props) => {
  return (
    <TextInput
      placeholder="Search.."
      value={search}
      onChangeText={(text) => handleChange(text)}
      style={{
        width: "90%",
        height: 50,
        alignSelf: "center",
        borderWidth: 0.2,
        borderColor: "#8e8e8e",
        borderRadius: 7,
        marginTop: 20,
        paddingLeft: 20,
      }}
    />
  );
};

export default index;
