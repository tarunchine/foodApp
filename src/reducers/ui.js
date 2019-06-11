export default function(state = { isLoading: false }, action) {
    console.log(action);
    switch (action.type) {
        case "LOADING": {
            return {
                isLoading: action.isLoading
            };
        }
        default:
            return state;
    }
}
