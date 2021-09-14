import React, {useState, useEffect} from 'react'

export const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([])
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Breaking+bad&limit=10&api_key=K1JRWy8nWR754BvDYszwhGvAoLfebXuz';
        const dataGifs = await fetch( url );
        const {data} = await dataGifs.json();
        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setGifs(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {gifs.map(({id, title}) => 
                    <li key={id}> {title} </li>
                )}
            </ol>
        </div>
    )
}
