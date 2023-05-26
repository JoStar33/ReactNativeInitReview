import { Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { CheckCard } from 'types/apps/card';
import { checkRowCardStyles } from './CheckRowCard.style';

interface Props {
  card: CheckCard;
  handleCheck: () => void;
}

const CheckRowCard = ({ card, handleCheck }: Props) => {
  return (
    <View style={checkRowCardStyles.container}>
      <Checkbox
        status={card.checked ? 'checked' : 'unchecked'}
        onPress={handleCheck}
      />
      <View style={checkRowCardStyles.textContainer}>
        <Text style={checkRowCardStyles.title}>{ card.title }</Text>
        <Text>{ card.contents }</Text>
      </View>
    </View>
  );
};

export default CheckRowCard;