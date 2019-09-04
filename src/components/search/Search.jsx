import React from 'react'
import './Search.css'

const Search = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search-input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default Search
