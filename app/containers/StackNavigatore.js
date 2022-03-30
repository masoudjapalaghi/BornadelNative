import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen, LoginScreen, RegisterScreen ,CourseDetailsScreen} from "../screen";
import TabNavigatore from "./TabNavigatore";
// import CourseDetailsScreen from "../screen/CourseDetailsScreen";

const Stack = createStackNavigator();

const StackNavigatore = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="TabNavigatore" component={TabNavigatore} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigatore;
