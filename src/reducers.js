import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    if (action.type === "ADD_TO_DO") {
        return [...state, action.payload];
    }else if(action.type === "DELETE_TODO"){
        const stateList = [...state];
        state = stateList.filter(el => el.id !== action.payload);
        return state;
    }
    return state;
}

export default combineReducers ({
    todos
});