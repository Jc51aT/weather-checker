import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!city){
            alert('City Empty');
            return
        }

        onSearch(city);
        setCity('');
    }

    return (
        <form className='search-city-form' onSubmit={onSubmit}>
            <label>City</label>
            <input type='text' placeholder='Search City' value={city} onChange={(e) => setCity(e.target.value)}></input>
            <input className='btn btn-block' type='submit' value='Search' ></input>
        </form>
    )
}

SearchBar.propTypes ={
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar
