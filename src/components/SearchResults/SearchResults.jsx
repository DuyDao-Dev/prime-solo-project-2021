import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Checkbox } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  control: {
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function SearchResults() {
  const dispatch = useDispatch();
  //   const [newFavorite, setNewFavorite] = useState("");
  const classes = useStyle();
  const search = useSelector((store) => store.search);
  const [expanded, setExpanded] = React.useState(false);
  const [newIngredient, setNewIngredient] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };

  function Checkboxes() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  }

  //Need handler for favorite button
  const onFavoriteClick = (favoriteItem) => {
    dispatch({ type: "POST_FAVORITE", payload: favoriteItem }); //This is going to favorite.saga
    console.log(`What is newFavorite passing in SearchResults?`, favoriteItem);
  };

  const onIngredientClick = () => {
    dispatch({ type: "POST_INGREDIENT", payload: newIngredient });
    // console.log(`What is happening onIngredientClick`, newIngredient);
    handleExpandClick(expanded);
    setNewIngredient([]);
    //Need to somehow remove the * now populating on the ingredients. What's causing this?
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      {search &&
        search.map((result, index) => {
          return (
            <Card className={classes.root} key={index}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={result.recipe.label}
              />
              <CardMedia
                className={classes.media}
                image={result.recipe.image}
                title={result.recipe.label}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <a href={result.recipe.url}>
                    Recipe Link: {result.recipe.label}
                  </a>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={(event) => onFavoriteClick(result.recipe)}
                >
                  <FavoriteIcon />
                </IconButton>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  //Need to set a recipe.id of some sort to only expand the one recipe.
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Ingredients:</Typography>
                  <Typography component={"span"} variant={"body2"}>
                    {result.recipe.ingredientLines.map((ingredient, i) => {
                      return (
                        <p key={i}>
                          <Checkbox
                            onClick={
                              (event) =>
                                setNewIngredient([...newIngredient, ingredient])
                              //...newIngredient spreader allows me to push ingredients into it.
                            }
                            color="default"
                            inputProps={{
                              "aria-label": "checkbox with default color",
                            }}
                          />
                          {ingredient}
                        </p>
                      );
                    })}
                    
                  </Typography>
                  <IconButton
                    onClick={(event) => onIngredientClick()}
                    color="primary"
                    aria-label="add to shopping cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Typography>Add to Shopping List</Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
    </Grid>
  );
}

export default SearchResults;

//Matt's code for his material UI for movie saga



// Somewhat working code for checkboxes
//   <Typography paragraph>Ingredients:</Typography>
//   <Typography paragraph>
//     {result.recipe.ingredientLines.map((ingredient, i) => {
//       return (
//         <ul key={i}>
//           <Checkbox
//             onClick={(event) => setNewIngredient(result.recipe.ingredientLines[i])}
//             color="default"
//             inputProps={{
//               "aria-label": "checkbox with default color",
//             }}
//           />
//           {ingredient}
//         </ul>
//       );
//     })}
//     <IconButton
//       onClick={(event) => onIngredientClick()}
//       color="primary"
//       aria-label="add to shopping cart"
//     >
//       <AddShoppingCartIcon />
//     </IconButton>
//     <Typography>Add to Shopping List</Typography>
//   </Typography>

// Original Working Code
//     <table>
//       <thead>
//         <tr>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {search &&
//           search.map((result, index) => {
//             return (
//               <tr key={index}>
//                 <td>
//                   <img
//                     src={result.recipe.image}
//                     onClick={() => {
//                       handleRecipeDetails(result.id);
//                     }}
//                   ></img>
//                   <p>{result.recipe.label}</p>
//                   <a href={result.recipe.url}>
//                     Recipe Link: {result.recipe.label}
//                   </a>
//                   <ul>
//                     {result.recipe.ingredientLines.map((ingredient, i) => {
//                       return <li key={i}>{ingredient}</li>;
//                       // <input key={i}> type="checkbox">{ingredient}</input>;
//                     })}
//                   </ul>
//                 </td>
//               </tr>
//             );
//           })}
//       </tbody>
//     </table>
//   );
