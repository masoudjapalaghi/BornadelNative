import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
  BackHandler,
} from "react-native";
import CustonButton from "../components/shared/CustonButton";
import CustomText from "../components/shared/CustomText";
import NetInfo from "@react-native-community/netinfo";
import asyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigationState } from "@react-navigation/native";
import { customToast } from "../utils/Toast";
const confirmationAlert = () => {
  return Alert.alert(
    "ارتباط با سرور؟!؟",
    "برای استفاده از اپلیکشن باید به اینترنت متصل باشید",
    [
      {
        text: "خروج",
        onPress: BackHandler.exitApp,
      },
    ],
    { cancelable: false }
  );
};

const WelcomeScreen = ({ navigation }) => {
  const screenIndex = useNavigationState((state) => state.index);

  useEffect(() => {
    let currentCount = 0;
    if (screenIndex <= 0) {
      BackHandler.addEventListener("hardwareBackPress", () => {
        if (currentCount === 1) {
          BackHandler.exitApp();
          return true;
        }

        currentCount += 1;

        customToast("برای خروج دوباره دکمه برگشت را لمس کنید");

        setTimeout(() => {
          currentCount: 0;
        }, 1000);
        return true;
      });
    }
  }, []);

  useEffect(() => {
    const checkForNet = async () => {
      const state = await NetInfo.fetch();
      if (!state.isConnected) confirmationAlert();
      else {
        const datauser = JSON.parse(await asyncStorage.getItem("user"));
        const datauserId = JSON.parse(await asyncStorage.getItem("userId"));
        if (datauser !== null && datauserId !== null) {
          if (datauser.id === datauserId) {
            navigation.dispatch(StackActions.replace("TabNavigatore"));
          } else {
            // for security
            await asyncStorage.removeItem("user");
            await asyncStorage.removeItem("userId");
            navigation.navigate("Login");
          }
        }
      }
    };
    checkForNet();
  }, []);
  return (
    <ImageBackground
      source={require("../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.containerLogo}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <CustomText fontFamily={"ih"} size="2.5" styles={styles.logoText}>
          برنادل ، نقشه راه یادگیری تو
        </CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <CustonButton
          title="ورود"
          color="royalblue"
          onPress={() => navigation.navigate("Login")}
        />
        <CustonButton
          title="ثبت نام"
          btnStyle="outline"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    top: 30,
  },
});
