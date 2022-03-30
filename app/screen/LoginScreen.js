import React, { useEffect } from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import * as Yup from "yup";
import CustonButton from "../components/shared/CustonButton";
import { CustomFormField, CustomForm, SubmitButton } from "../components/forms";
import Screen from "../components/shared/Screen";
import { customToast, loadingToast, succsessToast } from "../utils/Toast";
import { getUser } from "../api/users";
import Tost from "react-native-tiny-toast";
import asyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("این فیلد الزامی می باشد")
    .email("ایمیل معتبر نمیباشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(8, "پسوورد باید بیشتر از هشت کاراکتر باشد")
    .max(30)
    .lowercase("باید از یک کارکتر بزرگ استفاده کنید"),
});

const LoginScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const handleUserLoginination = async (user) => {
    try {
      loadingToast("در حال بررسی؟!؟");
      const users = await getUser();
      const userCheked = users.filter(
        (u) => u.email === user.email && u.password === user.password
      );
      if (userCheked[0]) {
        Tost.hide();
        await asyncStorage.setItem("user", JSON.stringify(userCheked[0]));
        await asyncStorage.setItem("userId", JSON.stringify(userCheked[0].id));
        dispatch(userAction(userCheked[0]));
        succsessToast("ورود موفقیت آمیز بود");
        navigation.reset({ index: 0, routes: [{ name: "TabNavigatore" }] });
      } else {
        Tost.hide();
        customToast("ایمیل یا کلمه عبور صحیح نمی باشد");
      }
    } catch (err) {
      Tost.hide();
      console.log(err);
    }
  };

  useEffect(() => {
    if (route.params) {
      succsessToast("با موفقیت ثبت نام شد");
    } else {
      null;
    }
  }, [route.params]);

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/singelLogo.png")}
        />
        <CustomForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(user) => handleUserLoginination(user)}
          validationSchema={validationSchema}
        >
          <CustomFormField
            name="email"
            placeholder="ایمیل کاربری"
            icon="email"
            autoComplete="email"
            autoCorrect={false}
            textAlign="right"
            keyboardType="email-address"
            placeholderTextColor="gray"
          />
          <CustomFormField
            name="password"
            placeholder="کلمه عبور"
            icon="form-textbox-password"
            autoCorrect={false}
            textAlign="right"
            secureTextEntry
          />
          <View style={{ width: "60%" }}>
            <SubmitButton title="ورود" />
            <CustonButton
              title="ثبت نام کنید"
              onPress={() => navigation.navigate("RegisterScreen")}
              btnStyle="outline"
              textColor="black"
            />
          </View>
        </CustomForm>
      </Screen>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    marginVertical: 50,
  },
});
