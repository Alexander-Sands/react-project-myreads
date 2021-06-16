import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><BooksApp /></BrowserRouter>, div)
})