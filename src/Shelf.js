import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
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

export default Shelf
