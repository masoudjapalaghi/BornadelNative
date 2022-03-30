import { combineReducers } from "redux";
import { coursesReducer,NewcoursesReducer,TopcoursesReducer } from "./coursesReducer";
import { userReduser } from "./usersReduser";

export const redusers = combineReducers({
  courses: coursesReducer,
  NewCourses: NewcoursesReducer,
  TopCourses: TopcoursesReducer,
  user: userReduser,
});
