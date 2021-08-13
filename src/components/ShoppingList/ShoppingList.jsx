import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import './ShoppingList.css';

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
import photo from "../images/Shopping List small.jpeg";
import { Checkbox } from "@material-ui/core";

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

function ShoppingList() {
  const shoppingList = useSelector((store) => store.shopping);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: "FETCH_INGREDIENT" });
  }, []);

  //Need a dispatch to delete recipes
  const handleDelete = (deleteItem) => {
    dispatch({ type: "DELETE_INGREDIENT"});
    console.log("Deleting item from FavoriteRecipe", deleteItem);
  };//No need for a payload. Triggering DELETE event and let the SQL Query delete where the status is true and user_id of current user.

  const onCheckClick = (ingredientChecked) => {
    dispatch({ type: "PUT_INGREDIENT", payload: ingredientChecked.id });
  };

  return (
    <center>
      
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="ingredients" className={classes.avatar}>
                  I
                </Avatar>
              }
              title="Ingredients"
            />
            <CardMedia className={classes.media} image={photo} />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component={"span"}
              >
                <h1>Shopping List: </h1>
                <section>
                  <div>
                    {shoppingList.map((ingredient, index) => {
                      return (
                        <h2 key={index}>
                          <Checkbox
                            // need a PUT for this click event
                            onClick={(event) => onCheckClick(ingredient)}
                            checked={ingredient.status || false}
                            color="default"
                            inputProps={{
                              "aria-label": "checkbox with default color",
                            }}
                          />
                          {ingredient.ingredient_name}
                        </h2>
                      );
                    })}
                  </div>
                </section>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => {
                  handleDelete(shoppingList);
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Typography>Delete Shopping List</Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </center>
  );
}

export default ShoppingList;
