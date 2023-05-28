import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from 'react-native-vector-icons/FontAwesome';
import SideBarButton from './SideBarButton';
import { View } from 'react-native';
import MainScreen from 'screens/MainScreen/MainScreen';

export default {
  title: '컴포넌트/분자/카드/SideBarButton',
  component: SideBarButton,
} as ComponentMeta<typeof SideBarButton>;

export const SideBarButtonTest: ComponentStory<typeof SideBarButton> = args => (
  <SideBarButton {...args}/>
);

SideBarButtonTest.args = {
  props: undefined,
  menu: {
    name: "공지사항 확인하기",
    navigate: "NotificationScreen",
    component: () => <MainScreen/>,
    icon: <Icon name="envelope-square" />,
  },
}