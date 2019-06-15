import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Dish from './Dish';
import './DishList.css';

class DishList extends Component {
    render() {
        let { dishes } = this.props;
        return (
            <div>
                <div className='dishes'>
                    <div className="dishes__container">
                        {dishes.map(dish => {
                            return <Dish dish={dish} key={shortid.generate()}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    let dishesToShow = [];
    let dishesToShowTemp = [];
    let selectedCategories = [];
    let searchText = state.searchText || '';
    state.categories.map( category => {
        if(category.isSelected) {
            selectedCategories.push(category.name);
        }
    })
    if( selectedCategories.length === 0) {
        dishesToShowTemp = state.dishes;
    } else {
        state.dishes.map( dish=> {
            if(selectedCategories.includes(dish.category)) {
                dishesToShowTemp.push(dish);
            }
        })
    }
    if(searchText) {
        for(let i=0; i<dishesToShowTemp.length; i++ ){
            if(dishesToShowTemp[i].name.toLowerCase().includes(searchText.toLowerCase())) {
                dishesToShow.push(dishesToShowTemp[i]);
            }
        }
    } else {
        dishesToShow = dishesToShowTemp
    }
    console.log('dishesToShow', dishesToShow);

    return {
        dishes: dishesToShow
    }
}

export default connect(mapStateToProps)(DishList);
