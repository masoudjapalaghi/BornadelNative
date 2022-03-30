import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "../components/shared/Screen";
import Icon from "../components/shared/Icon";
import CustomText from "../components/shared/CustomText";
import asyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";

const AccountScreen = ({ navigation }) => {
  const [getImage, setImage] = useState(null);

  useEffect(() => {
    const loadingImage = async () => {
      const imageUri =await asyncStorage.getItem("Image")
      if(imageUri !==  null) {
        setImage(imageUri)
      }
    };
    loadingImage();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      await asyncStorage.setItem("Image",result.uri)
      setImage(result.uri);
    }
  };
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    await asyncStorage.removeItem("user");
    await asyncStorage.removeItem("userId");
    // navigation.reset({ index: 0, routes: [{ name: "Welcome" }] });
    navigation.dispatch(StackActions.replace("Welcome"));
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          {getImage ? (
            <Image source={{ uri: getImage }} style={styles.image} />
          ) : (
            <Image style={styles.image} source={require("../assets/choice.png")} />
          )}
        </TouchableOpacity>
        <View style={styles.details}>
          <CustomText size="2.5" fontFamily="yekan" styles={styles.title}>
            {user.fullname}
          </CustomText>
          <CustomText size="2" fontFamily="yekan" styles={styles.subTitle}>
            {user.email}
          </CustomText>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{ alignSelf: "center", marginLeft: 20 }}
        >
          <Icon name="dots-vertical" backgroundColor="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          alignSelf: "flex-start",
          marginLeft: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon name="exit-to-app" backgroundColor="red" />
        <CustomText fontFamily="yekan" size="1.8" styles={styles.logoutText}>
          خروج از حساب کاربری
        </CustomText>
      </TouchableOpacity>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    padding: 15,
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "skyblue",
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },

  subTitle: {
    color: "#6e6969",
    textAlign: "left",
  },
  title: {
    textAlign: "left",
  },
  logoutText: {
    marginLeft: 10,
  },
});
