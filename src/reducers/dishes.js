export default function(state = [], action) {
    console.log(action);
    switch (action.type) {
        case "DISHES_FETCHED": {
            return action.dishes;
        }
        default:
            return state;
    }
}
