import React from "react";
import { Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const CustomText = ({ size, fontFamily, children, styles,color="#000" }) => {
  return (
    <Text style={[{ fontFamily, fontSize: RFPercentage(size) ,color}, styles]}>
      {children}
    </Text>
  );
};

export default CustomText;

