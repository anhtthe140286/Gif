import React from 'react';

const LikeCard = ({ link, favorite, setFavorite}) => {
    const onClickedRemove = () => {
        setFavorite(favorite.filter(item => item !== link))
    }

    return (
        <div className="item">
            <i className="large trash middle aligned icon" onClick={onClickedRemove}></i>
            <div className="content">
                {link}
            </div>
        </div>
    );
}
export default LikeCard;