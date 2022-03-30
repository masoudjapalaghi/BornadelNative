import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import CourseCard from "../components/shared/CourseCard";
import { useSelector } from "react-redux";

const TopCoursesScreen = ({ navigation }) => {
  const topCourses = useSelector((state) => state.TopCourses);

  return (
    <>
      <FlatList
        style={styles.flatList}
        data={topCourses}
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

export default TopCoursesScreen;

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
});
