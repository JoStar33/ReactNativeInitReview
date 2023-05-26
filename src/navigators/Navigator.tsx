import { createStackNavigator } from "@react-navigation/stack";
import { stackMenus } from "datas/menus/stackMenus";
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* 아래부터는 일반 네비게이터 */}
      {stackMenus.map((menu, _id) => (
        <Stack.Screen key={_id} name={menu.name} component={menu.component} />
      ))}
    </Stack.Navigator>
  );
};

export default Navigator;