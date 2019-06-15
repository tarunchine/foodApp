export function fetchDishes() {
    return dispatch => {
        dispatch(loading(true));
        return fetch(`http://temp.dash.zeta.in/food.php`)
            .then(response => response.json())
            .then(response => {
                dispatch(loading(false));
                dispatch(dataFetched(true,));
                dispatch(dishesFetched(response.recipes));
                dispatch(categoriesFetched(response.categories));
            });
    };
}

function loading(isLoading) {
    return {
        type: "LOADING",
        isLoading: isLoading
    };
}
function dataFetched(isFetched, data) {
    return {
        type: "DATA_FETCHED",
        isFetched: isFetched
    };
}
function dishesFetched(dishes) {
    return {
        type: "DISHES_FETCHED",
        dishes: dishes
    };
}
function categoriesFetched(categories) {
    return {
        type: "CATAGORIES_FETCHED",
        categories: categories
    };
}
export function searchDish(searchText) {
    return {
        type: "UPDATE_SEARCHTEXT",
        data: {
            searchText: searchText
        }
    };
}
export function updateCategory(categoryName) {
    console.log('action UPDATE_CATEGORY');
    return {
        type: 'UPDATE_CATEGORY',
        data: categoryName
    }
}
