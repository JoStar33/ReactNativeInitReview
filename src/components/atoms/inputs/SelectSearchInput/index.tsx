import React from "react";
import { TextInput } from "react-native";
import { selectSearchInputStyles } from "./SelectSearchInput.style";

interface Props {
  handleChange: (text: string) => void;
  search: string;
}

//셀렉트 박스내에 검색기능을 위해 구축한 searchInput
const index = ({handleChange, search}: Props) => {
  return (
    <TextInput
      placeholder="Search.."
      value={search}
      onChangeText={(text) => handleChange(text)}
      style={selectSearchInputStyles.container}
    />
  );
};

export default index;
