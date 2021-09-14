import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: gif, loadding} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>
            { loadding && <p className="animate__animated animate__flash">Loading...</p> }
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
