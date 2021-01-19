import React, { useRef, useState } from 'react';

const Filter = ({ onSelectedIndex, options, selected, onSelectedChange, term, setNums }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    setNums(option.value)
                    onSelectedChange(option)
                    onSelectedIndex(term, option.value)
                }
                }
            >
                {option.label}
            </div>
        );
    });

    // const 

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Choose number of gifs</label>
                <div onClick={() =>
                    setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;