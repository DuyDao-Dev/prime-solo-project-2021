import { useDispatch, useSelector } from "react-redux";

function SearchResults() {
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
        {search &&
          search.map((result, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={result.recipe.image}></img>
                  <p>{result.recipe.label}</p>
                  <a>{result.recipe.url}</a>
                  <a href={result.recipe.url}>
                    Recipe Link: {result.recipe.label}
                  </a>
                  <ul>
                    {result.recipe.ingredientLines.map((ingredient, i) => {
                      return <li key={i}>{ingredient}</li>;
                      // <input key={i}> type="checkbox">{ingredient}</input>;
                    })}
                  </ul>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default SearchResults;


//Think about whether or not I want all the ingredients displayed right away or do a toggle
//Where the ingredients show up on toggle. Code below to test out. 
    // const [display, setDisplay] = useState(true);
    // console.log(`What is GalleryItem doing`, image);//all objects in array being passed successfully!

    // const toggleDisplay = () => {
    // console.log('Image has been clicked');
    // //set state
    // setDisplay(!display)
    // }

    // return (
    //     <>
    //     <div className="container">
    //     <section onClick={() => toggleDisplay(image.id)}  className="galleryItem">
    //         { display &&
    //         <img className="photoItem" src={image.path} alt={image.description}/>}
    //         { !display &&
    //         <p className="itemDescription">{image.description}</p>}
    //     </section



    // Will need some type of mapping for the search results. Think about cards.
// Material UI link for cards: https://material-ui.com/components/cards/#card
// Check out "Complex Interactions"

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import DeleteIcon from '@material-ui/icons/DeleteOutlined';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>

//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={result.recipe.label}
//       />
//       <CardMedia
//         className={classes.media}
//         image={result.recipe.image}
//         title={result.recipe.label}
//       />
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="delete">
//           {/* <DeleteIcon /> Look up delete button */}
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Recipe URL:</Typography>
//           <Typography paragraph>
//             {result.recipe.url}
//           </Typography>
          
//         </CardContent>
//       </Collapse>
     
//     </Card>
//   );
// }
