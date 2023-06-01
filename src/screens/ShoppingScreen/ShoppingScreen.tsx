import React from "react";
import { View } from "react-native";
import { shoppingList } from "datas/lists/shoppingList";
import ShoppingList from "components/organizations/containers/ShoppingList/ShoppingList";

const ShoppingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ShoppingList shoppingList={shoppingList} />
    </View>
  );
};

export default ShoppingScreen;
