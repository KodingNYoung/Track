const initialState = {
  show_buttons: true
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "buttons/toggle":
      return {
        ...state,
        show_buttons: !state.show_buttons
      };

    default:
      return state;
  }
};

export default showReducer;
