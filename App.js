import React,{useEffect,useState} from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { I18nManager } from "react-native";
import { Provider } from "react-redux";
import AnimatedSplash from "react-native-animated-splash-screen"
// import Componets
import StackNavigatore from "./app/containers/StackNavigatore";
import { store } from "./app/redux/store";

// * Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
const [ready,setReady] =useState(false)

useEffect(()=>{
  setTimeout(() => {
    setReady(true)
  }, 3000);
},[ready])

  //#region  add fonts
  const [loaded] = useFonts({
    yekan: require("./app/assets/fonts/byekan.ttf"),
    ih: require("./app/assets/fonts/ih.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //#endregion  add fonts
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={ready}
      logoImage={require("./app/assets/logo.png")}
      backgroundColor={"#262626"}
      logoHeight={150}
      logoWidth={150}
    >
      <NavigationContainer>
        <Provider store={store}>
          <StackNavigatore />
        </Provider>
      </NavigationContainer>
     </AnimatedSplash>
  );
};

const styles = StyleSheet.create({});
export default App;
