import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDishes, searchDish } from "../../actions/actions";
import CategoryList from "../CategotyList/CategoryList";
import DishList from "../DishList/DishList";
import FavDishList from "../FavDishList/FavDishList";
import { Loader } from "../Loader";
import "./Home.css";

class Home extends Component {
    componentDidMount() {
        let { dataFetched } = this.props;
        if (!dataFetched) {
            this.props.getDishes();
        }
    }
    searchDishes = event => {
        let searchText = event.target.value || "";
        console.log("search value", searchText);
        this.props.searchDish(searchText);
    };
    render() {
        let {
            
            isLoading,
            searchText
        } = this.props;
        if (isLoading) {
            return (
                <div className='page'>
                    <Loader />
                </div>
            );
        }
        return (
            <div className='page'>
                <div className="main-heading">
                    <h3>Best Food App</h3>
                </div>
                <div className="page__content">
                <FavDishList />
                <div className='search'>
                    <input
                        className='searchField'
                        type='text'
                        value={searchText}
                        onChange={this.searchDishes}
                        placeholder='Search by Dish Name'
                    />
                </div>
                <CategoryList />
                <DishList />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    let favDishes = [];
    state.dishes.map(dish => {
        if (dish.isFavourite) {
            favDishes.push(dish);
        }
    });
    return {
        searchText: state.searchText,
        isLoading: state.ui.isLoading,
        dataFetched: state.dataFetched
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => {
            dispatch(fetchDishes());
        },
        searchDish: (searchText)=> {
            dispatch(searchDish(searchText))
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


