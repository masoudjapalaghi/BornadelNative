import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Loading from "../components/shared/Loading";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFPercentage } from "react-native-responsive-fontsize";
import Screen from "../components/shared/Screen";
import { TopCoursesScreen, NewCoursesScreen, CoursesScreen } from "../screen";
import { useDispatch } from "react-redux";
import {
  initalCourses,
  initalNewCourses,
  initalTopCourses,
} from "../redux/actions/coursesAction";

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(initalCourses("courses"));
      dispatch(initalNewCourses("newCourses"));
      dispatch(initalTopCourses("TopCourses"));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Loading loading={loading} size="large" color="royalblue" />
      <Screen>
        <TopTab.Navigator
          initialRouteName="AllCourses"
          backBehavior="none"
          screenOptions={{
            tabBarActiveTintColor: "royalblue",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              fontFamily: "ih",
              fontSize: RFPercentage(1.6),
            },
          }}
        >
          <TopTab.Screen
            name="AllCourses"
            component={CoursesScreen}
            options={{ tabBarLabel: "همه دور ها" }}
          />
          <TopTab.Screen
            name="NewCoursesScreen"
            component={NewCoursesScreen}
            options={{ tabBarLabel: "دور ه های جدید" }}
          />
          <TopTab.Screen
            name="TopCoursesScreen"
            component={TopCoursesScreen}
            options={{ tabBarLabel: "دوره های محبوب" }}
          />
        </TopTab.Navigator>
      </Screen>
    </>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
