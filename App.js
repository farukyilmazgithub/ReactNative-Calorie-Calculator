import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BmiScreen from "./src/screens/BmiScreen";
import BmrScreen from "./src/screens/BmrScreen";
import DailyCaloriesScreen from "./src/screens/DailyCaloriesScreen";
import CalorieCalendarScreen from "./src/screens/CalorieCalendarScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    BmiScreen: BmiScreen,
    BmrScreen: BmrScreen,
    DailyCaloriesScreen:DailyCaloriesScreen,
    CalorieCalendarScreen:CalorieCalendarScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Calorie Calculator",
    },
  }
  
);
export default createAppContainer(navigator);
