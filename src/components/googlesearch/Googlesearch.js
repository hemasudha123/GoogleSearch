import React, { useState } from 'react'
import './GoogleSearch.css';

export default function Googlesearch() {
  const [suggestionsList, setSuggestionsList] = useState([
    { id: 1, suggestion: 'Price of Ethereum' },
    { id: 2, suggestion: 'Oculus Quest 2 specs' },
    { id: 3, suggestion: 'Tesla Share Price' },
    { id: 4, suggestion: 'Price of Ethereum today' },
    { id: 5, suggestion: 'Latest trends in AI' },
    { id: 6, suggestion: 'Latest trends in ML' },
    { id: 7, suggestion: 'Ai Keyboard' },
    { id: 8, suggestion: 'Admin Panel' },
    { id: 9, suggestion: 'Summarize Work'},
    { id: 10, suggestion: 'Documentation'},
  ]);

  const [searchInput, setSearchInput] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
    const filteressuggestion = suggestionsList.filter((suggestion) =>
      suggestion.suggestion.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredSearch(filteressuggestion);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.suggestion)
    setSuggestionsList([]);

  };

  return (
    <div className='googlesearch-Container'>
      <div className='google-parent'>
        <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png " alt="google logo" className='picture' />
        <div className='search-input-container'>
          <div className='search-input-parent'>
            <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon" className="search-icon" />
            <input type="search" className='search-input' value={searchInput} onChange={handleInput} />
          </div>
          {filteredSearch.map((suggestion) => (
            <ul classname="suggestion-list">
              <li
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.suggestion}
              </li>
            </ul>

          ))}
        </div>
      </div>

    </div>
  )
}
