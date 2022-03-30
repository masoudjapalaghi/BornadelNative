import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const CustonButton = ({
  title,
  onPress,
  color = "skyblue",
  btnStyle,
  textColor = "white",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: `${color}` }, styles[btnStyle]]}
      onPress={onPress}
    >
      <CustomText
        fontFamily="yekan"
        size="2"
        styles={[styles.text, { color: textColor }]}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustonButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "skyblue",
    borderRadius: 8,
    paddingVertical: 15,
  },
  outline: {
    borderWidth: 2,
    borderColor: "skyblue",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
  },
});
