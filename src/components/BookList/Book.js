import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBookStatus } from "../../actions/actions";
import { BOOKS_STATUS } from "../../Constants";

class Book extends Component {
    renderActionOptions() {
        let { data } = this.props;
        let { status } = data;
        let options = [];
        for (let key in BOOKS_STATUS) {
            if (status === key) {
                options.push(
                    <option value={key} selected key={key}>
                        {BOOKS_STATUS[key]}
                    </option>
                );
            } else {
                options.push(
                    <option value={key} key={key}>
                        {BOOKS_STATUS[key]}
                    </option>
                );
            }
        }
        return options;
    }
    handleStatusChange = event => {
        let status = event.target.value;
        let { data, updateStatus } = this.props;
        let { id } = data;
        updateStatus(id, status);
    };
    render() {
        let { data } = this.props;
        let { image, title, author } = data;
        return (
            <div className='book'>
                <div className='book__img'>
                    <img src={image} alt={title} />
                </div>
                <p className='book__title'>{title}</p>
                <p className='book__author'>{author}</p>
                <select onChange={this.handleStatusChange}>
                    {this.renderActionOptions()}
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: (id, status) => dispatch(updateBookStatus(id, status))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Book);
