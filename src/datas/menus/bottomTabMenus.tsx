import { BottomMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MainScreen from "screens/MainScreen/MainScreen";
import ShoppingScreen from "screens/ShoppingScreen/ShoppingScreen";
import { BottomTabMenu } from "types/apps/menu";

export const bottomTabMenu: BottomTabMenu[] = [
  {
    name: BottomMenus.Home,
    component: MainScreen,
    tabBarLabel: "메인",
    tabBarIcon: <EntypoIcon size={20} name="home" />,
  },
  {
    name: BottomMenus.Shopping,
    component: ShoppingScreen,
    tabBarLabel: "쇼핑",
    tabBarIcon: <EntypoIcon size={20} name="shop" />,
  },
];