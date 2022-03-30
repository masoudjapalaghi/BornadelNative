import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { numberWithCommas } from "../../utils/price";
import CustomText from "./CustomText";
const CourseCard = ({ item }) => {
  return (
    <View style={styles.cardParent}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `${item.image}`,
          }}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <View style={styles.descriptionGrid}>
          <CustomText fontFamily="ih" size="2" styles={styles.text}>
            {item.title}
          </CustomText>
          <CustomText fontFamily="ih" size="2" styles={styles.text}>
            {item.teacher}{" "}
          </CustomText>
        </View>
        <View style={styles.descriptionGrid}>
          <CustomText fontFamily="ih" size="1.7" styles={styles.text}>
            قیمت دوره :{" "}
            {item.price === "0"
              ? "رایگان"
              : numberWithCommas(item.price) + "تومان"}
          </CustomText>
          <CustomText fontFamily="ih" size="1.7" styles={styles.text}>
            تایم کلاس : {item.time}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "snow",
    marginVertical: 20,
    elevation: 6,
  },
  descriptionGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cardImage: {
    width: "100%",
    height: 220,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    color: "gray",
  },
  cardParent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
