export function fetchBooks() {
    return dispatch => {
        dispatch(loading(true));
        return fetch(`https://next.json-generator.com/api/json/get/E1xBCZK0U`)
            .then(response => response.json())
            .then(json => {
                dispatch(loading(false));
                dispatch(dataFetched(true));
                return dispatch(booksFetched(json));
            });
    };
}

function loading(isLoading) {
    return {
        type: "LOADING",
        isLoading: isLoading
    };
}
function dataFetched(isFetched) {
    return {
        type: "DATA_FETCHED",
        isFetched: isFetched
    };
}
function booksFetched(books) {
    return {
        type: "BOOKS_FETCHED",
        books: books
    };
}
export function updateBookStatus(id, status) {
    return {
        type: "UPDATE_STATUS",
        data: {
            id: id,
            status: status
        }
    };
}

export function searchBook(searchText) {
    return {
        type: "UPDATE_SEARCHTEXT",
        data: {
            searchText: searchText
        }
    };
}
