import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'

class ListBooks extends React.Component {
  state = {
    books: []
  }

  updateBooksState = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.updateBooksState()
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
          <Shelf books={currentlyReading} title={'Currently Reading'} updateShelfs={this.updateBooksState}/>
          <Shelf books={wantToRead} title={'Want to Read'} updateShelfs={this.updateBooksState}/>
          <Shelf books={read} title={'Read'} updateShelfs={this.updateBooksState}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
