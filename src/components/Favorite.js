import React, { useEffect, useState } from 'react';

const Favorite = ({ favorite, onHeartClicked}) => {

    const [liked, setLiked] = useState(0);

    const onClickLiked = () => {
        
    }

    useEffect(() => {
        setLiked(favorite.length);
        console.log(favorite);
    }, [favorite])

    return (
        <div className="ui labeled button" tabIndex="0">
            {/* <div className="ui animated button" onClick={onClickLiked}> */}
            <div className="ui animated button" onClick={() => {
                onClickLiked()
                onHeartClicked()}
                }>
                <div className="visible content">
                    <i className="heart icon"></i> Like
                </div>
                <div className="hidden content">
                    <i className="heartbeat icon"></i> Unlike
                </div>
            </div>
            <a className="ui basic label">
                {liked}
            </a>
        </div>
    );
}

export default Favorite;