export default function(state = { dataFetched: false }, action) {
    console.log(action);
    switch (action.type) {
        case "DATA_FETCHED": {
            return {
                dataFetched: action.isFetched
            };
        }
        default:
            return state;
    }
}
