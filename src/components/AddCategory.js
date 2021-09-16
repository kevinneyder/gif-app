import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories(oldArray => [inputValue, ...oldArray]);
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
    setCategories: PropTypes.func.isRequired
}