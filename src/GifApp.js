import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types'
import './index.css';

const GifApp = () => {

    // const categories = ['Futbol', 'Basquetball', 'Volleyball'];

    const [categories, setCategories] = useState(['Goku']);    
    
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
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />)    
                }
            </ol>
        </div>
    )
}

export default GifApp
