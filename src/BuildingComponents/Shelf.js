import React from 'react'
import Books from './Books'

class Shelf extends React.Component { 

    render() {
        const { header, books, changeShelf } = this.props
        return (
            // Shelf Books
            <div className="bookshelf">
                <h2 className="bookshelf-title">{header}</h2>
                <div className="bookshelf-books">
                    <Books shelfBooks={books} changeShelf={changeShelf} />
                </div>
            </div>
        )
    }
}

export default Shelf 