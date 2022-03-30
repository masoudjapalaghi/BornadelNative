import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { initalCourses } from "./actions/coursesAction";
import { redusers } from "./reducers";

export const store = createStore(redusers, compose(applyMiddleware(thunk)));


// store Dispatch
// store.dispatch(initalCourses);