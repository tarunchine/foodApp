import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/actions";
import { BookList } from "../BookList";
import { Loader } from "../Loader";
import "./Home.css";
class Home extends Component {
    componentDidMount() {
        let { dataFetched } = this.props;
        if (!dataFetched) {
            this.props.getBooks();
        }
    }
    render() {
        let { books = {}, isLoading } = this.props;
        if (isLoading) {
            return (
                <div className='page'>
                    <Loader />
                </div>
            );
        }
        let { wantsToRead = [], currentlyReading = [], read = [] } = books;
        return (
            <div className='page'>
                <div className='book-shelf'>
                    <h1>Currently Reading </h1>
                    <BookList books={currentlyReading} />
                </div>
                <div className='book-shelf'>
                    <h1>Wants to Read </h1>
                    <BookList books={wantsToRead} />
                </div>
                <div className='book-shelf'>
                    <h1>Read</h1>
                    <BookList books={read} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let books = {};
    state.books.map(book => {
        let status = book.status;
        if (books[status]) {
            books[status].push(book);
        } else {
            books[status] = [book];
        }
    });
    return {
        books,
        isLoading: state.ui.isLoading,
        dataFetched: state.dataFetched
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => {
            dispatch(fetchBooks());
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
