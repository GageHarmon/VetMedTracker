import React from "react";

function Search({ searchDog, onChangeSearch }) {
    function handleChange(event) {
        onChangeSearch(event.target.value);
    }

    return (
        <div className="searchbar">
            <label htmlFor="search" style={{ fontWeight: "bold", fontSize: "20px" }}>
                Search Dogs <input type="text" id="search" placeholder="Search..." value={searchDog} onChange={handleChange} />
            </label>
        </div>
    );
}

export default Search;