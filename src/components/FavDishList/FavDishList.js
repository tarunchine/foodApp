import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavDish from './FavDish';
import './FavDishList.css';

 class FavDishes extends Component {
    render() {
        let { favDishes} = this.props;
        return (
                <div className='favDishes'>
                    <h3 className='favDishes__heading'>Favourites</h3>
                    <p className='favDishes__sub-heading'>Enjoy what you have ordering!</p>
                    <div className="favdishes__container">
                        {favDishes.map(dish => {
                            return <FavDish dish={dish} />
                        })}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    let favDishes = [];
    state.dishes.map( dish=> {
        if(dish.isFavourite) {
            favDishes.push(dish);
        }
    })
    return {
        favDishes
    }
}

export default connect(mapStateToProps)(FavDishes);