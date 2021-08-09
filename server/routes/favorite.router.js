const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const rejectUnauthenticated =
  require("../modules/authentication-middleware").rejectUnauthenticated;

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log(`What is req.body doing in favorite.router?`, req.body);
  // Add query to get all genres
  const allFavoriteQuery = `
    SELECT *
    FROM favorite_recipe;`;

  pool
    .query(allFavoriteQuery)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error GETting favorite list on favorite.router", err);
      res.sendStatus(500);
    });
});


// add a new favorite recipe
router.post('/', rejectUnauthenticated, (req, res) => {
  const newFavorite = req.body;
  console.log('FAVORITE ADDED', newFavorite);
  const queryText = `
  INSERT INTO "favorite_recipe" ("name", "image", "url") 
  VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [newFavorite.label, newFavorite.image, newFavorite.url])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error POSTing Favorite to db", error);
      res.sendStatus(500);
    });
  
});

// delete a favorite recipe
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log(`What is being DELETED:`, req.params.id);
  const deleteFavoriteQuery = `
  DELETE from favorite_recipe 
  WHERE id=$1;`;
  pool
    .query(deleteFavoriteQuery, [req.params.id])
    .then((result) => {
      console.log(`Successfully DELETED from favorite.recipe database`, result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Did not DELETE from database`, error);
      res.sendStatus(500);
    });
});


module.exports = router;