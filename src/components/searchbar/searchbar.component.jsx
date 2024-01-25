// searchbar.component.jsx
import React from "react";
import "./searchbar.styles.css";
const SearchBar = ({ placeholder, handleInput }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleInput}
        // onClick for the assignment
    />
);

export default SearchBar;