import { combineReducers } from "redux";
import books from "./books";
import dataFetched from "./dataFetched";
import search from "./search";
import ui from "./ui";

let rootReducer = combineReducers({
    ui,
    dataFetched,
    searchText: search,
    books
});
export default rootReducer;
