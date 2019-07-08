const initialState = {
    expensives:[],
    categories: []
  };

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_EXPENSIVES") {
        state.expensives = action.expensives;
    }
    if (action.type === "ADD_EXPENSIVE") {
        state.expensives.push(action.expensive);
    }
    if (action.type === "ADD_CATEGORIES") {
        state.categories = action.categories
    }
    return state;
};

export default rootReducer;