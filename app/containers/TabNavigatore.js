import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MyCoursesScreen, CoursesScreen, AccountScreen } from "../screen";
import TopTabNavigator from "./TopTabNavigator";
import { RFPercentage } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

const TabNavigatore = () => {
  return (
    <Tab.Navigator
      initialRouteName="Courses"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "royalblue",
        tabBarInactiveTintColor: "gray",
        // tabBarActiveBackgroundColor:"lightcyan",
        tabBarLabelStyle: {
          fontFamily: "yekan",
          fontSize: RFPercentage(1.4),
        },
        tabBarBadgeStyle: {
          backgroundColor: "blue",
          marginHorizontal: 5,
          marginVertical: -5,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Courses") {
            iconName = "school";
          } else if (route.name === "MyCoursesScreen") {
            iconName = "library";
          } else if (route.name === "Account") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="MyCoursesScreen"
        component={MyCoursesScreen}
        options={{
          tabBarLabel: "دوره های من",
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Courses"
        component={TopTabNavigator}
        options={{
          tabBarLabel: "دور ها",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "اکانت من",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatore;

const styles = StyleSheet.create({});
