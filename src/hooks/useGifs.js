import { useState, useEffect } from 'react';
import axios from 'axios';

const useGifs = (defaultSearchTerm) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const { data } = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'QbyWmiaiZIpJWWMX119U1SADiFAdj0iP',
                q: term,
                limit: 15,
            },
        });
        setGifs(data.data);
        // console.log(gifs);
    };

    return [gifs, search];
}

export default useGifs;