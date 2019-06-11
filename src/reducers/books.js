export default function(state = [], action) {
    console.log(action);
    switch (action.type) {
        case "UPDATE_STATUS": {
            let books = [...state];
            let { id, status } = action.data;
            for (let i = 0; i < books.length; i++) {
                if (books[i].id === id) {
                    books[i].status = status;
                }
            }
            return books;
        }
        case "BOOKS_FETCHED": {
            return action.books;
        }
        default:
            return state;
    }
}
