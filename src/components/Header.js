import React from 'react'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'

const Header = ({ onSearch }) => {
    return (
        <header className="header">
            <h1>Weather Checker</h1>
            <SearchBar onSearch={onSearch}/>
      </header>
    )
}




Header.propTypes ={
    onSearch: PropTypes.func.isRequired,
}

export default Header
