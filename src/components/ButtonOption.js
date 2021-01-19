import React from 'react';

const ButtonOption = ({ onButtonClicked }) => {
    return (
        <div onClick={() => {
            onButtonClicked()
        }} className="ui animated button" tabIndex="0">
            <div className="visible content">Filter</div>
            <div className="hidden content">
                <i className="right arrow icon"></i>
            </div>
        </div >
    );
}

export default ButtonOption;