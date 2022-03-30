import React from "react";
import { StyleSheet, View, Image, ScrollView, Alert } from "react-native";
import * as Yup from "yup";
import CustonButton from "../components/shared/CustonButton";
import { CustomFormField, CustomForm, SubmitButton } from "../components/forms";
import Screen from "../components/shared/Screen";
import { getUser, registerUser } from "../api/users";
import Toast from "react-native-tiny-toast";
import { customToast, loadingToast } from "../utils/Toast";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("این فیلد  الزامی می باشد"),
  email: Yup.string()
    .required("این فیلد الزامی می باشد")
    .email("ایمیل معتبر نمیباشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(8, "پسوورد باید بیشتر از هشت کاراکتر باشد")
    .lowercase("باید از یک کارکتر بزرگ استفاده کنید"),
  passwordConfirmation: Yup.string()
    .required("تکرار رمز عبور الزامی می باشد")
    .oneOf([Yup.ref("password"), null], "کلمه های عبور باید یکسان باشند"),
});

const RegisterScreen = ({ navigation }) => {
  
  const handelUserRegistration = async (user) => {
    try {
      loadingToast("در حال ثبت نام ...");
      const users = await getUser();
      const userRepeat = users.filter((u) => u.email === user.email);
      if (userRepeat.length === 0) {
        const { status, data } = await registerUser(user);
        if (status === 201) {
          Toast.hide();
          navigation.navigate("Login", data.fullname);
        } else {
          Toast.hide();
          customToast("خطایی رخ داده است");
        }
      } else {
        Toast.hide();
        customToast("کاربری قبلا با این ایمیل ثبت نام کرده است");
      }
    } catch (err) {
      console.log(err);
      Toast.hide();
    }
  };

  return (
    <>
      <ScrollView>
        <Screen style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../assets/singelLogo.png")}
          />
          <CustomForm
            initialValues={{
              fullname: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            onSubmit={(user) => {
              handelUserRegistration(user);
            }}
            validationSchema={validationSchema}
          >
            <CustomFormField
              name="fullname"
              placeholder="نام و نام خانوادگی"
              icon="account-circle"
              autoCorrect={false}
              textAlign="right"
              placeholderTextColor="gray"
            />
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
            <CustomFormField
              name="passwordConfirmation"
              placeholder="تکرار کلمه عبور"
              icon="repeat"
              autoCorrect={false}
              textAlign="right"
              secureTextEntry
            />
            <View style={{ width: "60%" }}>
              <SubmitButton title="ثبت نام" />
              <CustonButton
                title="بازگشت"
                onPress={() => navigation.goBack()}
                btnStyle="outline"
                textColor="black"
              />
            </View>
          </CustomForm>
        </Screen>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    marginVertical: 50,
  },
});
