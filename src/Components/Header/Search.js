import React from 'react';
import { useProducts } from '../../contexts/MealsContext';
import './Search.css';

const Search = () => {
    const { searchResults } = useProducts();

    return <div className="search-box">{searchResults.length && searchResults.map((item) => <p>{item.title}</p>)}</div>;
};

export default Search;