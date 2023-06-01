import ShoppingCard from "components/molecules/cards/ShoppingCard/ShoppingCard";
import { shoppingList } from "datas/lists/shoppingList";
import {ShoppingCard as ShoppingElement} from "types/apps/card"
import React from "react";
import { FlatList, View } from "react-native";

interface Props {
  shoppingList: ShoppingElement[]
}

const ShoppingList = ({ shoppingList }: Props) => {
  return (
    <View>
      <FlatList
        data={shoppingList}
        renderItem={(shoppingElement) => (
          <ShoppingCard
            key={shoppingElement.index}
            item={shoppingElement.item}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default ShoppingList;
