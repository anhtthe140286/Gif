import React, { useState } from 'react';

const Search = ({ onFormSubmit, term, setTerm , nums}) => {
    // const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term, nums);
    }

    return (
        <div className="search-bar ui">
            <form onSubmit={onSubmit} className="ui form">
                {/* <label>Search a term</label> */}
                <div className="field">
                    <input
                        value={term}
                        type="text"
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
}
export default Search;