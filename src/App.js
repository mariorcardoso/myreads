import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBookShelf = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} updateBookShelf={this.updateBookShelf} />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks shelfBooks={this.state.books} updateBookShelf={this.updateBookShelf} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
