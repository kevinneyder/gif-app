import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories(oldArray => [...oldArray, inputValue]);
            setinputValue('');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type  = 'text'
                value = { inputValue }
                onChange = { ( handleInputChange ) }
            />   
        </form>
    )
}

AddCategory.propType = {
    setCategories: PropTypes.string.isRequired
}
