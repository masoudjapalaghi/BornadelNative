import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CourseCard from "../components/shared/CourseCard";
import { useSelector } from "react-redux";

const NewCoursesScreen = ({ navigation }) => {
  const newCourses = useSelector((state) => state.NewCourses);
  return (
    <>
      <FlatList
        style={styles.flatList}
        data={newCourses}
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

export default NewCoursesScreen;

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
});
