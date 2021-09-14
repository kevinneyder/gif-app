
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=K1JRWy8nWR754BvDYszwhGvAoLfebXuz`;
    const dataGifs = await fetch( url );
    const {data} = await dataGifs.json();
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })
    
    return gifs;
}