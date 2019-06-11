export default function(state = "", action) {
    console.log(action);
    switch (action.type) {
        case "UPDATE_SEARCHTEXT": {
            return action.data.searchText;
        }
        default:
            return state;
    }
}
