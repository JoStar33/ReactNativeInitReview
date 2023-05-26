import { StackMenus } from "constants/menus";
import DrawerNavigator from "navigators/DrawerNavigator";
import { StackMenu } from "types/apps/menu";

export const stackMenus: StackMenu[] = [
  {
    name: StackMenus.DrawerNavigator,
    component: DrawerNavigator,
  },
];