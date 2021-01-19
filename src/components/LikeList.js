import React from 'react';
import LikeCard from './LikeCard';

const LikeList = ({ favorite, setFavorite }) => {
    const renderedList = favorite.map((fav) => {
        return <LikeCard link={fav} favorite={favorite} setFavorite={setFavorite}/>
    })

    return (
        
        <div className="ui relaxed divided list">{renderedList}</div>
    );
}

export default LikeList;