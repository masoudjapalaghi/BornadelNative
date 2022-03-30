import { getCourses } from "../../api/Courses";

export const initalCourses = (type) => {
  return async (dispatch) => {
    const courses = await getCourses(type);
    await dispatch({ type: "INIT", payload: courses });
  };
};
export const initalNewCourses = (type) => {
  return async (dispatch) => {
    const courses = await getCourses(type);
    await dispatch({ type: "INITNEW", payload: courses });
  };
};
export const initalTopCourses = (type) => {
  return async (dispatch) => {
    const courses = await getCourses(type);
    await dispatch({ type: "INITTOP", payload: courses });
  };
};