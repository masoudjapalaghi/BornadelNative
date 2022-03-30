export const userReduser = (state = {}, action) => {
  switch (action.type) {
    case "USER":
      return { ...action.payload };
      break;
    default:
      return state;
  }
};
