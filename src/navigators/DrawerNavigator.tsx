import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerBar from "components/layouts/sidebar/DrawerBar/DrawerBar";
import { drawerMenu } from "datas/menus/drawerMenus";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center"
      }}
      drawerContent={(props) => (
        <DrawerBar
          props={props}
          drawerMenus={drawerMenu}
        />
      )}
    >
      {drawerMenu.map((menu, _id) => (
        <Drawer.Screen
          key={_id}
          name={menu.navigate}
          component={menu.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
