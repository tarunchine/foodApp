import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

var initialState = {
    ui: {
        isLoading: true
    },
    dataFetched: false,
    searchText: "",
    categories: [],
    dishes: []
};
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
);
window.s = store;
export default store;
