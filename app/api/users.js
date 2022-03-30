import http from "./";
import config from "./config.json";

export const registerUser = async (user) => {
  try {
    const data = await http.post(
      `${config.Borandel}/register`,
      JSON.stringify(user)
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getUser = async () => {
  try {
    const { data } = await http.get(`${config.Borandel}/register`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
