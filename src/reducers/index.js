import { combineReducers } from "redux";
import categories from './categories';
import dataFetched from "./dataFetched";
import dishes from "./dishes";
import search from "./search";
import ui from "./ui";

let rootReducer = combineReducers({
    ui,
    dataFetched,
    searchText: search,
    dishes,
    categories
});
export default rootReducer;
