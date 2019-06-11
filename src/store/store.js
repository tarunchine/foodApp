import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

var initialState = {
    ui: {
        isLoading: true
    },
    dataFetched: false,
    searchText: "",
    books: []
};
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
);

export default store;
