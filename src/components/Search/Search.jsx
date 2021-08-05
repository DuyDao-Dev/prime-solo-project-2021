import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchResults from "../SearchResults/SearchResults";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Card } from "react-bootstrap";

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
          onChange={(event) => setSearch(event.target.value)}
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

    // {
    //   /* <div class="card" style="width: 18rem;">
    //     <img
    //       src="${data.hits[0].recipe.image}"
    //       class="card-img-top"
    //       alt="..."
    //     />
    //     <div class="card-body">
    //       <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    //       <p class="card-text">
    //         Recipe Source: ${data.hits[0].recipe.ingredients}
    //       </p>
    //       <a href="${data.hits[0].recipe.url}" class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    // </div> */
    // }

