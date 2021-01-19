import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Filter from './components/Filter';
import GifList from './components/GifList';
import ButtonOption from './components/ButtonOption';
import Favorite from './components/Favorite';
import LikeList from './components/LikeList';

//QbyWmiaiZIpJWWMX119U1SADiFAdj0iP
const options = [
    {
        label: '10',
        value: 10
    },
    {
        label: '15',
        value: 15
    },
    {
        label: '20',
        value: 20
    },
];


const App = () => {
    const [gifs, setGifs] = useState([]);
    const [term, setTerm] = useState('');
    const [nums, setNums] = useState(10);
    const [selected, setSelected] = useState(options[0]);
    const [openOption, setOpenOption] = useState(false);
    const [openDisplay, setOpenDisplay] = useState(true);
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        search();
    }, []);

    const openDropdown = () => {
        return (
            <div className="item">
                <Filter
                    onSelectedIndex={search}
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    term={term}
                    setNums={setNums}
                />
            </div>
        );
    }

    const openGifs = () => {
        return (
            <div>
                <label className="label">Found: {gifs.length} gif(s)</label>
                <GifList gifs={gifs} favorite={favorite} setFavorite={setFavorite} />
            </div>
        );
    }

    const openList = () => {
        return (
            <div>
                <label className="label">You liked {favorite.length} gif(s)</label>
                <LikeList favorite={favorite} setFavorite={setFavorite} />
            </div>
        );
    }

    const search = async (term, nums) => {
        const { data } = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'QbyWmiaiZIpJWWMX119U1SADiFAdj0iP',
                q: term,
                limit: nums,
            },
        });
        setGifs(data.data);
    };

    const changeStateOption = () => {
        setOpenOption(!openOption);
    }

    const changeStateDisplay = () => {
        setOpenDisplay(!openDisplay);
    }

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <div className="ui menu">
                <div className="ui left menu" style={{ padding: '10px 0' }}>
                    <div className="item">
                        <Search
                            onFormSubmit={search}
                            term={term}
                            setTerm={setTerm}
                            nums={nums}
                        />
                        <ButtonOption onButtonClicked={changeStateOption} />
                    </div>
                </div>
                <div className="ui right menu">
                    {openOption ? openDropdown() : null}
                    <div className="item">
                        <Favorite favorite={favorite} onHeartClicked={changeStateDisplay} />
                    </div>
                </div>
            </div>
            {openDisplay ? openGifs() : openList()}
        </div>  
    );
}

export default App;