export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return [...action.payload];
      break;

    default:
      return state;
  }
};
export const NewcoursesReducer = (state = [], action) => {
  switch (action.type) {
    case "INITNEW":
      return [...action.payload];
      break;

    default:
      return state;
  }
};

export const TopcoursesReducer = (state = [], action) => {
  switch (action.type) {
    case "INITTOP":
      return [...action.payload];
      break;

    default:
      return state;
  }
};
