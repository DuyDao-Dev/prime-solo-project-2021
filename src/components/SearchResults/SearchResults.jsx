import { useDispatch, useSelector } from "react-redux";

function SearchResults () {

    const dispatch = useDispatch();
    const search = useSelector((store) => store.search);
    console.log(`Search results from Search component`, search);

    return (
      //need html to display the results of the search.jsx
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {search.map((result, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={result.hits[0].recipe.image}></img>
                  {/* <button
                    onClick={() => {
                      handleFavoriteClick(result.search.hits[0].recipe.image);
                    }}
                    name="favorite"
                  >
                    Favorite
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}

export default SearchResults;

// Will need some type of mapping for the search results. Think about cards.
// Material UI link for cards: https://material-ui.com/components/cards/#card
// Check out "Complex Interactions"

//   <table>
//     <thead>
//       <tr>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {searchResults.map((result, i) => {
//         return (
//           <tr key={i}>
//             <td>

//               <img src={result.images.original.url}></img>
//               <button onClick={() => {handleFavoriteClick(result.images.original.url)}}name="favorite">Favorite</button>

//             </td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>

// export default SearchResults;