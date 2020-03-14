import React from 'react'
import './SearchBox.styles.css'

export default function SearchBox({ placeholder, handleOnChange }) {
    return (
        <div>
            <input
            className='search' 
            type='search'
            placeholder={placeholder}
            onChange={handleOnChange}
            />
        </div>
    )
}
