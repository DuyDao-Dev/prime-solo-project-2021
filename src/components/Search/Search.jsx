import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchResults from "../SearchResults/SearchResults";


function Search() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = () => {
      setSearch(event.target.value);
    };

    const getSearchResults = (event) => {
    event.preventDefault();
    dispatch({ type: "FETCH_SEARCH", payload: search });
    };

  return (
    //html here
    <form onSubmit={getSearchResults}>
      <center>
        <input
          className="Search"
          value={search}
          onChange={(event) => handleSearchChange(event.target.value)}
          placeholder="Enter Ingredient"
        />
        <button className="searchButton" type="submit">
          Search
        </button>
        <SearchResults />
      </center>
    </form>
  );
}

export default Search;


