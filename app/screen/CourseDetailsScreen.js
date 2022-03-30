import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomText from "../components/shared/CustomText";
import Loading from "../components/shared/Loading";
import Screen from "../components/shared/Screen";
import { numberWithCommas } from "../utils/price";
const CourseDetailsScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);

  const { id, title, price, teacher, time, image, description } =
    route.params.course;

  useEffect(() => {
    if (!route.params.course) {
      return navigation.goback();
    } else {
      setLoading(false);
    }
    navigation.setOptions({
      headerShown: true,
      title: title,
      headerTitleStyle: {
        fontFamily: "yekan",
        fontSize: RFPercentage(2),
        color: "white",
      },
      headerStyle: {
        backgroundColor: "royalblue",
      },
    });
  }, []);

  return (
    <>
      <Loading loading={loading} size="large" color="royalblue" />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: `${image}`,
            }}
            style={styles.image}
          />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.descriptionGrid}>
              <CustomText fontFamily="ih" size="2" styles={styles.text}>
                {title}
              </CustomText>
              <CustomText fontFamily="ih" size="2" styles={styles.text}>
                {teacher}{" "}
              </CustomText>
            </View>
            <View style={styles.descriptionGrid}>
              <CustomText fontFamily="ih" size="1.7" styles={styles.text}>
                قیمت دوره :{" "}
                {price === "0"
                  ? "رایگان"
                  : numberWithCommas(price) + "تومان"}
              </CustomText>
              <CustomText fontFamily="ih" size="1.7" styles={styles.text}>
                تایم کلاس : {time}
              </CustomText>
            </View>
            <CustomText fontFamily="yekan" size="2" styles={styles.description}>
              {description}
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 290,
  },
  descriptionGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  description: {
    textAlign: "justify",
    lineHeight: 30,
    margin: 10,
    color: "gray",
  },
});
