import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

const CustomTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps}></TextInput>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color="royalblue"
          style={styles.icon}
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "royalblue",
    fontFamily: "yekan",
    marginBottom: 15,
  },
  icon: {
    
  },
  textInput: {
    fontSize: RFPercentage(2),
    flex: 1,
    height: "100%",
    color:"#0c0c0c"
  },
});
