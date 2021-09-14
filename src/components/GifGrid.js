import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: gif, loadding} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loadding && <p>Loading...</p> }
            <div className="card-grid">
                {
                    gif.map((gif) => (
                        <GifGridItem
                            key = {gif.id}
                            {...gif}
                        />
                    ))
                }
            </div>
        </>
    )
}
