import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Screen from "../components/shared/Screen";
import CustomText from "../components/shared/CustomText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const confirmationAlert = (course, onPress) => {
  return Alert.alert(
    course.title,
    `دوره ی ${course.title} از لیست پاک شود`,
    [
      {
        text: "انصراف",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "بله پاک کن؟",
        onPress: onPress,
      }
    ],
    { cancelable: false }
  );
};

const deleteAction = (course, onPress) => {
  return (
    <TouchableOpacity onPress={() => confirmationAlert(course, onPress)}>
      <View
        style={{
          backgroundColor: "orange",
          width: 70,
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const MyCoursesScreen = () => {
  const [getMyCourse, setMyCourse] = useState([
    {
      id: "1",
      title: "دوره دندانپزشکی",
      teacher: "رضا محمدی",
    },
    {
      id: "2",
      title: "دوره DBA",
      teacher: "زهزا سعادت",
    },
    {
      id: "3",
      title: "دوره تکنسین داروخانه",
      teacher: "احمد شریعتی",
    },
    {
      id: "4",
      title: "دوره mba",
      teacher: "فریبا زادمهر",
    },
  ]);
  const handelDelete = (course) => {
    setMyCourse(getMyCourse.filter((c) => c.id !== course.id));
  };
  return (
    <Screen style={{ alignItems: "center" }}>
      <View style={styles.title}>
        <CustomText size="3" fontFamily="yekan" color="#fff">
          لیست دوره های من
        </CustomText>
      </View>
      <View style={{ width: "100%" }}>
        <FlatList
          data={getMyCourse}
          keyExtractor={(c) => c.id}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 7 }}>
              <Swipeable
                renderRightActions={() =>
                  deleteAction(item, () => handelDelete(item))
                }
              >
                <View style={styles.container}>
                  <View style={styles.details}>
                    <CustomText fontFamily="yekan" size="2">
                      {item.title}
                    </CustomText>
                    <CustomText fontFamily="yekan" size="1.7" color="gray">
                      مدرس دوره : {item.teacher}
                    </CustomText>
                  </View>
                </View>
              </Swipeable>
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "royalblue",
    borderRadius: 20,
    alignItems: "center",
    width: "90%",
    height: "90%",
    padding: 10,
    elevation: 2,
  },
  title: {
    marginVertical: 15,
    paddingVertical: 10,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    elevation: 6,
  },
});
