import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDishes } from "../../actions/actions";
import './Details.css';

class Details extends Component {
    componentDidMount() {
        let { dataFetched } = this.props;
        if (!dataFetched) {
            this.props.getDishes();
        }
    }
    render() {
        console.log(this.props);
        let {match, dishes } = this.props;
        let {name } = match.params;
        let decodeName =decodeURIComponent(name);
        let dishToshow ={};
        dishes.map(dish => {
            if(dish.name === decodeName) {
                dishToshow = dish;
            }
        })
        let {image, name:dishname, price, details, rating, category,reviews} = dishToshow;
        console.log('aaa')
        return (
            <div className="page">
                <div className="main-heading">
                    <span className="back-arrow" onClick={()=>{this.props.history.push('/')}}>&#x2190;</span>
                    <h3>Best Food App</h3>
                </div>
                <div className="page__content">
                    <div className="dish__description">
                        <div className="dish__description__image">
                            <img src={image} alt={name} />
                        </div>
                        <div className="dish__description__content">
                            <p className="dish__description_name">{dishname}</p>
                            <p className="dish__description__price">{price}</p>
                            <div className="dish__description__category">
                                <span>Category: {category}</span>
                                <span> {rating} Rating( {reviews} Reviews)</span>
                            </div>
                            <div className="dish__description__summary">
                                <h3>Details</h3>
                                {details}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => {
            dispatch(fetchDishes());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
