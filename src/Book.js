import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends React.Component {
  state = {
    shelf: this.props.shelf
  }

  updateShelf = (bookId, shelf) => {
    this.setState({shelf: shelf})
    BooksAPI.update({id: bookId}, shelf).then((res) => {
      if(this.props.updateShelfs)
        this.props.updateShelfs()
    })
  }

  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.coverLink})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={(event) => this.updateShelf(this.props.id, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default Book
