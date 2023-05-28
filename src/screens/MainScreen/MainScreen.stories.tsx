import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from './MainScreen';

export default {
  title: '스크린/MainScreen',
  component: MainScreen,
} as ComponentMeta<typeof MainScreen>;

export const MainScreenTest: ComponentStory<typeof MainScreen> = () => (
  <MainScreen />
);
