// import { useDispatch, useSelector } from "react-redux";

// function SearchResults () {

//     const dispatch = useDispatch();
//     const searchResults = useSelector((store) => store.searchResults);
//     console.log(`Search results from Search component`, searchResults);

//     return(
//         //need html to display the results of the search.jsx

//     );
// }

// export default SearchResults;

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