import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'

class ListBooks extends React.Component {
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getAllBooks()
  }

  render() {
    const { books } = this.state
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading' )
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead' )
    const read = books.filter((book) => book.shelf === 'read' )

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf books={currentlyReading} title={'Currently Reading'} updateBooksList={this.getAllBooks}/>
          <Shelf books={wantToRead} title={'Want to Read'} updateBooksList={this.getAllBooks}/>
          <Shelf books={read} title={'Read'} updateBooksList={this.getAllBooks}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
