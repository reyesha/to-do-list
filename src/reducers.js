import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    // change to swtich case
    // extract constants
    if (action.type === "ADD_TO_DO") {
        return [...state, action.payload];
    }else if(action.type === "DELETE_TODO"){
        const stateList = [...state];
        // refactor el to proper name
        state = stateList.filter(el => el.id !== action.payload);
        return state;
    }
    return state;
}

export default combineReducers ({
    todos
});