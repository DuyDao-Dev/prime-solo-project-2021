const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const rejectUnauthenticated =
require("../modules/authentication-middleware").rejectUnauthenticated;



router.get("/:search", rejectUnauthenticated, (req, res) => {
  const search = req.params.search;
  console.log(`Search get router`, req.params.search);

  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=42f22cbe&app_key=c3f8615cb868c6628ceb47245c103500&ingr=1-10&imageSize=SMALL&random=true&field=label&field=image&field=url&field=ingredientLines&limit=5`
      // ${process.env.APP_ID}&app_key=${process.env.API_KEY} //Currently not working in the API link
      // `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&ingr=1-10&imageSize=SMALL&random=true&field=label&field=image&field=url&field=ingredientLines&limit=5`
    )
    .then((response) => {
      console.log(`server GETting response`, response.data.hits[0]);
      // res.sendStatus(200);
      res.send(response.data.hits);
      //Fixed the empty array in searchResults reducer by taking out data from (response.data.data)
      //Also fixed the response.data by changing it to response.data.hits to drill into the data even
      //further to make search.map to work on SearchResults.jsx
    })
    .catch((err) => {
      console.log(err);
      // res.sendStatus(500);
    });
});

module.exports = router;
