import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { SelectBox } from "types/apps/selectbox";
import { selectedItemButtonStyles } from "./SelectedItemButton.style";

interface Props<T> {
  handleSelected: (title: string) => void;
  item: T;
}

const index = <T extends SelectBox>({item, handleSelected}: Props<T>) => {
  return (
    <TouchableOpacity
      style={selectedItemButtonStyles.container}
      onPress={() => handleSelected(item.title)}
    >
      <Text style={{ fontWeight: "600" }}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default index;
