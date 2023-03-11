import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/Splash";
import HomeScreen from "../screens/Home";
import MainTabs from "./MainTabs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ title: "Splash", headerShown: false }}
      />
      <Stack.Screen
        options={{ title: "Home", headerShown: false, gestureEnabled: false }}
        name="MainTabs"
        component={MainTabs}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
