import React from "react";

function Search({ searchDog, onChangeSearch }) {
    function handleChange(event) {
        onChangeSearch(event.target.value);
    }

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Dogs</label>
            <input
                type="text"
                id="search"
                placeholder="Search..."
                value={searchDog}
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;