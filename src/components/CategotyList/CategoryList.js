import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { updateCategory } from '../../actions/actions';
import Catagory from './Catagory';
import './CategoryList.css';

class CategoryList extends Component {
    handleCategoryClick = (categoryName) => {
        console.log('handleCategoryClick', categoryName);
        this.props.updateSelectedCategory(categoryName);
    }
    render() {
        let { categories} = this.props;
        return (
            <div className='catagorylist'>
                <h3 className='catagorylist__heading'>Select Categories</h3>
                <div className="categories__container">
                    {categories.map(category => {
                        return <Catagory category={category} handleCategoryClick={this.handleCategoryClick} key={shortid.generate()}/>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateSelectedCategory: (categoryName)=> {
            dispatch(updateCategory(categoryName))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);