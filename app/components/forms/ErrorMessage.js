import { StyleSheet } from "react-native";
import React from "react";
import CustomText from "../shared/CustomText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <CustomText  fontFamily="ih"
  size="1.7" styles={styles.error}>{error}</CustomText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  
    marginBottom: 15,
  },
});
