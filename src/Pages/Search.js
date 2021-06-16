import React from 'react'
// import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Books from '../BuildingComponents/Books'

class Search extends React.Component { 
    
    
    
    render() {
        const { allBooks, changeShelf, onSearchForBooks, research } = this.props
       
        return (
            // Search Component
            <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search" onClick ={research} >Close</Link>
                <div className="search-books-input-wrapper">
                <input
                    type="text" 
                    placeholder="Search by title or author"
                    onChange ={(e) => onSearchForBooks(e.target.value)} 
                />

                </div>
            </div>
            <div className="search-books-results">
                <Books shelfBooks={allBooks} changeShelf={changeShelf} />
            </div>
            </div>
        )
    }
}

export default Search    