import http from "./";
import config from "./config.json";
export const getCourses = async (type) => {
  try {
    const { data } = await http.get(`${config.Borandel}/${type}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
