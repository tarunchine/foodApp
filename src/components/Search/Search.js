import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks, searchBook } from "../../actions/actions";
import { BookList } from "../BookList";
import { Loader } from "../Loader";
import "./Search.css";

class Search extends Component {
    componentDidMount() {
        let { dataFetched } = this.props;
        if (!dataFetched) {
            this.props.getBooks();
        }
    }
    searchBooks = event => {
        let searchText = event.target.value || "";
        this.props.updateSearchText(searchText.toLowerCase());
    };
    render() {
        let { books = [], searchText, isLoading } = this.props;
        if (isLoading) {
            return (
                <div className='page'>
                    <Loader />
                </div>
            );
        }
        return (
            <div className='page'>
                <h1>Search </h1>
                <input
                    className='searchField'
                    type='text'
                    value={searchText}
                    onChange={this.searchBooks}
                    placeholder='Search by title'
                />
                <BookList books={books} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    let results = [];
    state.books.map(book => {
        if (book.title.toLowerCase().includes(state.searchText)) {
            results.push({ ...book });
        }
    });
    return {
        books: results,
        searchText: state.searchText,
        isLoading: state.ui.isLoading,
        dataFetched: state.dataFetched
    };
};
const mapDispatchToProps = dispatch => {
    return {
        updateSearchText: searchText => dispatch(searchBook(searchText)),
        getBooks: () => {
            dispatch(fetchBooks());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
