import SelectedItemButton from "components/atoms/buttons/SelectedItemButton";
import SelectSearchInput from "components/atoms/inputs/SelectSearchInput";
import React from "react";
import { FlatList, View } from "react-native";
import { SelectBox } from "types/apps/selectbox";
import { selectBoxListStyles } from "./SelectBoxList.style";

interface Props<T> {
  handleChange: (search: string) => void;
  clicked: boolean;
  data: T[];
  search: string;
  handleSelected: (title: string) => void;
}

const index = <T extends SelectBox>({
  handleChange,
  clicked,
  data,
  search,
  handleSelected,
}: Props<T>) => {
  return (
    <>
      {clicked ? (
        <View
          style={selectBoxListStyles.container}
        >
          <SelectSearchInput handleChange={handleChange} search={search} />
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <SelectedItemButton<T>
                handleSelected={handleSelected}
                item={item}
              />
            )}
          />
        </View>
      ) : null}
    </>
  );
};

export default index;
