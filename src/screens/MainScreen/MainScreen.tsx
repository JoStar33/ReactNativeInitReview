import CheckRowCard from "components/molecules/cards/CheckRowCard/CheckRowCard";
import CommonSelectBox from "components/molecules/selectBoxs/CommonSelectBox";
import { checkRowCardList } from "datas/lists/checkRowCardList";
import { useState } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { CheckCard } from "types/apps/card";

const MainScreen = () => {
  const [cardList, setCardList] = useState<CheckCard[]>(checkRowCardList);
  const setChecked = (card: CheckCard) => {
    card.checked = !card.checked;
    return card;
  };
  const handleClickCheckBox = (cardElement: ListRenderItemInfo<CheckCard>) => {
    setCardList(
      cardList.map((card, _id) =>
        _id === cardElement.index ? setChecked(card) : card
      )
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <CommonSelectBox data={checkRowCardList}/>
      <FlatList
        data={cardList}
        renderItem={(cardElement) => (
          <CheckRowCard
            card={cardElement.item}
            handleCheck={() => handleClickCheckBox(cardElement)}
          />
        )}
      />
    </View>
  );
};

export default MainScreen;
