import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigators/Navigator";

const App = () => {
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
};

export default App;