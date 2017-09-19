import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooks extends React.Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim(), books: [] })
    if (query){
      BooksAPI.search(query, 50).then((response) => {
        if (Array.isArray(response)){
          this.updateBooks(response)
        }
      })
    }
  }

  updateBooks = (books) => {
    const shelfBooks = this.props.shelfBooks
    let searchBooks = books
    shelfBooks.forEach((shelfBook) => {
      const searchBook = searchBooks.find(searchBook => searchBook.id === shelfBook.id);
      if(searchBook)
        searchBook.shelf = shelfBook.shelf
    })
    this.setState({ books: searchBooks })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  id={book.id}
                  shelf={book.shelf}
                  title={book.title}
                  authors={book.authors}
                  coverLink={book.imageLinks && book.imageLinks.smallThumbnail}
                  updateBookShelf={this.props.updateBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
