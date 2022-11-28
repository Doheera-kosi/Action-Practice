const initialState = 0;

const change = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 2;

    case "DECREMENT":
      if (state === 0) {
        return state;
      }
      return state - 2;

    default:
      return state;
  }
};

export default change