import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
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
  const [newFavorite, setNewFavorite] = useState("");
  const search = useSelector((store) => store.search);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(`Search results from Search component`, search);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch({ type: "POST_FAVORITE", payload: newFavorite }); //This is going to add.favorite.saga
    console.log(`What is newFavorite passing in SearchResults?`, newFavorite);
  };
  //Console log is showing 19 times. I need to figure out a way to make it
  //a unique click for each.

  return (
    <section>
      {search &&
        search.map((result, index) => {
          return (
            <Card className={classes.root}>
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
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                  {/* Lets turn this into the button to add to shopping list */}
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  // onClick={(event) => setNewFavorite(result.recipe.id)}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Ingredients:</Typography>
                  <Typography paragraph>
                    {result.recipe.ingredientLines.map((ingredient, i) => {
                      return <li key={i}>{ingredient}</li>;
                      // <input key={i}> type="checkbox">{ingredient}</input>;
                    })}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
    </section>
  );
}


export default SearchResults;


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

