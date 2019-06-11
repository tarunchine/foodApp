import React, { Component } from "react";
import Book from "./Book";
import "./BookList.css";

export default class BookList extends Component {
    render() {
        let { books = [] } = this.props;
        if (books.length === 0) {
            return (
                <div className='no-data'>
                    <p>No books available.</p>
                </div>
            );
        }
        return (
            <div className='book-list'>
                {books.map(book => {
                    return <Book data={book} key={book.id} />;
                })}
            </div>
        );
    }
}
