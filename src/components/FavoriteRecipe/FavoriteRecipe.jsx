import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

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


function FavoriteRecipe () {
    
    const recipeList = useSelector((store) => store.favorite);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
    dispatch({ type: "FETCH_FAVORITE" });
    }, []);

    //STRETCH GOAL: Rating system for favorite recipes
    //Need a dispatch to delete recipes
    const handleDelete = (deleteItem) => {
        dispatch({ type: "DELETE_FAVORITE", payload: deleteItem})
        console.log('Deleting item from FavoriteRecipe', deleteItem);
    }

    return (

        <Grid container className={classes.root} spacing={2}>
          {recipeList &&
            recipeList.map(list => {
              return (
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        F
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={list.name}
                  />
                  <CardMedia
                    className={classes.media}
                    image={list.image}
                    title={list.name}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <a href={list.url}>Recipe Link: {list.name}</a>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={() => {
                        handleDelete(list.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Typography>Delete</Typography>
                  </CardActions>
                </Card>
              );
            })}
        </Grid>
    )
}

export default FavoriteRecipe;

