import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Icon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 100,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
