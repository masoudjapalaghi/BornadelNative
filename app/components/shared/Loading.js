import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading = ({ loading ,size,color}) => {
  return (
    <>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator
            size={size}
            color={color}
            animating={loading}
            style={{marginTop:200}}
          />
        </View>
      )}
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    height: "100%",
    justifyContent: "flex-start",
    
    alignItems: "center",
  },
});
