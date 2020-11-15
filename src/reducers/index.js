const initialState = {
  color: '#f00' // red color
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.color
      };

    default:
      return state;
  }
};

export default rootReducer;