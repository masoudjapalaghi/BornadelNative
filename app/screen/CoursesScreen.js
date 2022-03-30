import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CourseCard from "../components/shared/CourseCard";
import { useSelector } from "react-redux";

const CoursesScreen = ({ navigation }) => {
  const courses =useSelector(state=>state.courses)
  return (
    <>
      <FlatList
        style={styles.flatList}
        data={courses}
        keyExtractor={(course) => course.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CourseDetails", { course: item })
            }
          >
            <CourseCard item={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
    // justifyContent:"center"
  },
});
