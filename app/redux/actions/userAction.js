// import { registerUser } from "../../api/users";

export const userAction = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "USER", payload: user });
  };
};
