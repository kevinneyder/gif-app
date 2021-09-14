import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
// import PropTypes from 'prop-types'
import './index.css';

const GifApp = () => {

    // const categories = ['Futbol', 'Basquetball', 'Volleyball'];

    const [categories, setCategories] = useState(['Futbol', 'Basquetball', 'Volleyball']);    
    
    // const handleAdd = () => {
    //     setCategories(oldArray => [...oldArray, 'newElement']);
    // };

    return (
        <div>
            <h2>Gif - App</h2>
            <AddCategory setCategories={setCategories}  />
            <hr/>
            {/* <button onClick={handleAdd}>Add</button> */}
            <ol>
                {
                    categories.map( category => <li key={category}>{ category }</li>) 
                }
            </ol>
        </div>
    )
}

export default GifApp
