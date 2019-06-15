export default function(state = [], action) {
    console.log(action);
    switch (action.type) {
        case "CATAGORIES_FETCHED": {
            return action.categories;
        }
        case "UPDATE_CATEGORY": {
            let categories = [...state];
            for(let i=0;i<categories.length; i++ ) {
                if(categories[i].name === action.data) {
                    if(categories[i].isSelected) {
                        categories[i].isSelected = false
                    } else {
                        categories[i].isSelected = true
                    }
                    
                }
            }
            return categories;
        }
        default:
            return state;
    }
}
