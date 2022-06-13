const initialState = {
  value: 0
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value/plusOne":
      return {
        ...state,
        value: state.value + 1
      };
    case "value/minusOne":
      return {
        // copy the state
        ...state,
        // reduce the value by 1
        value: state.value - 1
      };
    default:
      return state;
  }
};

export default testReducer;
