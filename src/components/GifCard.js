import React, { useState, useEffect } from 'react';

const GifCard = (props) => {
    const [spans, setSpans] = useState(0);

    const addToFavorite = (item) => {
        const check = window.confirm("Do you want to add to Favorite?");
        if (props.favorite) {
            if (check && !(props.favorite.includes(props.image.url))) {
                props.setFavorite(arr => [...arr, item]);
                alert('Done')
            } else if (check && (props.favorite.includes(props.image.url))) {
                alert('Already liked this gif!');
            }
        } else {
            console.log('noob');
        }
    }

    const setSpanPerGif = () => {
        const size = props.image.images.original.height / props.image.images.original.width * 250;
        setSpans(Math.ceil(size / 10) + 1);
    }

    useEffect(() => {
        setSpanPerGif();
    });

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img src={props.image.images.original.url} onClick={() => {
                addToFavorite(props.image.url);
            }} />
        </div>
    );
}

export default GifCard;