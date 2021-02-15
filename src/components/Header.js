import React from 'react'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'

const Header = ({ onSearch }) => {
    return (
        <header className="header">
            <SearchBar onSearch={onSearch}/>
      </header>
    )
}




Header.propTypes ={
    onSearch: PropTypes.func.isRequired,
}

export default Header
