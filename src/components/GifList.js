import React from 'react';
import GifCard from './GifCard';
import './GifList.css'

const GifList = ({ gifs, favorite, setFavorite }) => {
    const renderedList = gifs.map((gif) => {
        // return <GifCard image={}/>
        return <GifCard key={gif.id} image={gif} favorite={favorite} setFavorite={setFavorite} />
    });

    return (
        <div className="gif-list">{renderedList}</div>
    );
}

export default GifList;