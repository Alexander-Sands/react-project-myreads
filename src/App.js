import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './Pages/Shelves'
import Search from './Pages/Search'
import './Style/App.css'

class BooksApp extends React.Component {
  state = {
    query: "",
    books: [],
    search: []
  }

  // research
  research = () => this.setState( () => ({search: []}) )

  // Get My Books
  componentDidMount = () => BooksAPI.getAll()
    .then( (mybooks) => 
      this.setState( () => ({books: mybooks}) ) 
    )
  
  // UpData Books Shelf
  changeBookShelf = (CBook , shelf) => BooksAPI.update(CBook, shelf)
    .then( () => BooksAPI.getAll() )
    .then( (mybooks) => {
        this.setState( () => ({books: mybooks}) )
      }
    )
    .then( () => this.searchForBooks(this.state.query) )

  // Search For Books
  searchForBooks = (Query) => {
    this.setState( () => ( {query: Query.trim()} ) )
    if (Query === "") return this.setState( () => ({ search: [] }) )
    BooksAPI.search(Query)
      .then( (Search) => {
        if(!(Search.error) && (Search !== "")) { 
          this.setState(() => ({ 
            search: Search.map((Sear) => {
              Sear.shelf = 'none'
              this.state.books.forEach(book => { if (book.id === Sear.id) Sear.shelf = book.shelf })
              return Sear 
            }) 
          }))
        } 
        else { this.setState( () => ({ search: [] }) ) }
      })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <Shelves
              allBooks={this.state.books} 
              changeShelf={this.changeBookShelf}
            />
            )} />
          <Route exact path='/search' render={() => (
              <Search
                allBooks = {this.state.search}  
                changeShelf={this.changeBookShelf}
                onSearchForBooks={this.searchForBooks}
                research={this.research}
              />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp