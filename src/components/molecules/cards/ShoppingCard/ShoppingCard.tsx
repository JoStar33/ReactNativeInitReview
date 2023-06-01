import React from 'react';
import { Text, View } from 'react-native';
import ColorButton from 'components/atoms/buttons/ColorButton/ColorButton';
import { ShoppingCard as ShoppingItem } from 'types/apps/card';
import { shoppingCardStyles } from './ShoppingCard.style';

interface Props {
  item: ShoppingItem;
};

const ShoppingCard = ({ item }: Props) => {
  return (
    <View style={shoppingCardStyles.container}>
      <View style={shoppingCardStyles.shoppingInfo}>
        <Text style={shoppingCardStyles.shoppingTitle}>{item.title}</Text>
        <Text>{item.price}원</Text>
      </View>
      <Text style={shoppingCardStyles.shoppingContents}>{item.contents}</Text>
      <View style={shoppingCardStyles.buttonContainer}>
        <ColorButton label={'구매하기'} color={'skyblue'} handleClick={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <ColorButton label={'장바구니 담기'} color={'purple'} handleClick={function (): void {
          throw new Error('Function not implemented.');
        } }/>
      </View>
    </View>
  );
};

export default ShoppingCard;