import React from 'react';
import './TodoSearch.css';

import {TodoContext} from '../TodoContext';


function TodoSearch(){

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    const onSearchValuechange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return [
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValuechange}
        />,
        <p>{searchValue}</p>
    ];
}

export {TodoSearch};