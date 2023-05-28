import SelectBoxButton from "components/atoms/buttons/SelectBoxButton";
import SelectedItemButton from "components/atoms/buttons/SelectedItemButton";
import SelectSearchInput from "components/atoms/inputs/SelectSearchInput";
import SelectBoxList from "components/molecules/lists/SelectBoxList";
import React, { useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  FlatList,
} from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { SelectBox } from "types/apps/selectbox";

interface Props<T> {
  data: T[];
}

const index = <T extends SelectBox>({ data }: Props<T>) => {
  const [search, setSearch] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectBoxData, setSelectBoxData] = useState<T[]>(data);
  const [selectedInfo, setSelectedInfo] = useState<string>("");
  const handleChange = (search: string) => {
    if (search !== "") {
      let tempData = selectBoxData.filter((item) => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setSelectBoxData(tempData);
    } else {
      setSelectBoxData(data);
    }
    setSearch(search);
  };
  const handleSelected = (title: string) => {
    setSelectedInfo(title);
    setClicked(!clicked);
    handleChange("");
    setSearch("");
  };
  return (
    <View style={{position: "relative", zIndex: 9999}}>
      <SelectBoxButton
        handleClick={() => setClicked(!clicked)}
        selectedInfo={selectedInfo}
        clicked={clicked}
      />
      <SelectBoxList
        handleChange={handleChange}
        clicked={clicked}
        data={selectBoxData}
        search={search}
        handleSelected={handleSelected}
      />
    </View>
  );
};

export default index;
