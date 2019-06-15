import React, { Component } from 'react';

export default class Catagory extends Component {
    handleClick = () => {
        let { category, handleCategoryClick} = this.props;
        handleCategoryClick(category.name);
    }
    render() {
        let { category} = this.props;
        let {image, name, isSelected} = category;
        return (
            <div className={ isSelected ? "category category__selected": "category"} onClick={this.handleClick}>
                <div className="category__image">
                    <img src={image} alt={name} />
                </div>
                <p className="catgory__name">{name}</p>
            </div>
        )
    }
}
