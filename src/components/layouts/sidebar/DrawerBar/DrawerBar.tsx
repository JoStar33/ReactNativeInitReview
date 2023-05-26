import {
  DrawerContentComponentProps,
  DrawerContentScrollView
} from "@react-navigation/drawer";
import SideBarButton from "components/atoms/buttons/SideBarButton/SideBarButton";
import { View } from "react-native";
import { DrawerMenu } from "types/apps/menu";
import { drawerBarStyles } from "./DrawerBar.style";

interface Props {
  props: DrawerContentComponentProps;
  drawerMenus: DrawerMenu[];
}

const DrawerBar = ({ props, drawerMenus }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={drawerBarStyles.drawerContent}>
          {drawerMenus.map((menu, _id) => (
            <SideBarButton key={_id} props={props} menu={menu}/>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerBar;
