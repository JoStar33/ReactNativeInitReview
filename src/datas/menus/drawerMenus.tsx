import { DrawerMenus } from "constants/menus";
import BottomTabNavigator from "navigators/BottomTabNavigator";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { DrawerMenu } from "types/apps/menu";

export const drawerMenu: DrawerMenu[] = [
  {
    name: "홈으로",
    component: BottomTabNavigator,
    navigate: DrawerMenus.DrawerHome,
    icon: <FontAwesomeIcon size={20} name="home" />,
  },
];