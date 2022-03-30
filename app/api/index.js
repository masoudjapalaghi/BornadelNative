import axios from "axios";
import { Alert } from "react-native";

// axios.interceptors.response.use(null, (error) => {
//   const expectedError =
//     error.response && error.response >= 400 && error.response < 500;
//   if (!expectedError) {
//     Alert.alert("خطا","مشکلی از سمت سرور پیش آمده",
//         [
//             {
//               text: "باشه",
//             //   onPress: onPress,
//             }
//           ],
//           { cancelable: false }
//         );
//       };
//   return Promise.reject(error);
// });

axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
