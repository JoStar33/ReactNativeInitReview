import { BottomMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import HomeScreen from "screens/MainScreen";
import { BottomTabMenu } from "types/apps/menu";

export const bottomTabMenu: BottomTabMenu[] = [
  {
    name: BottomMenus.Home,
    component: HomeScreen,
    tabBarLabel: "메인",
    tabBarIcon: <EntypoIcon size={20} name="home" />,
  },
];