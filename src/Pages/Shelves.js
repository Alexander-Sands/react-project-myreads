import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../BuildingComponents/Shelf'

class Shelves extends React.Component { 

    render() {
        const { allBooks, changeShelf } = this.props
        const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
        const read = allBooks.filter(book => book.shelf === 'read');

        return (
            // Search View
            <div className="list-books">
                {/* HEADER */} 
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>

                {/* SHELFLS */} 
                <div className="list-books-content">
                  <div>
                    <Shelf header='Currently Reading' books={currentlyReading} changeShelf={changeShelf} />
                    <Shelf header='Want to Read' books={wantToRead} changeShelf={changeShelf} />
                    <Shelf header='Read' books={read} changeShelf={changeShelf} />
                  </div>
                </div>

                {/* SHEARCH BUTTON */} 
                <div className="open-search">
                  <Link to='/search' >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelves 