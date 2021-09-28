import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <div className="container">
      <h2>Welcome to No Thyme, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Where having No Thyme, saves time.</h3>
      <ul>
        <li>
          With No Thyme you can enter your ingredients you have on hand,
          or find recipes with certain ingredients,
          you will be able to search for recipes matching those ingredients. 
        </li>
        <br></br>
        <li>Enjoy those recipes? Add them to your favorites! </li>
        <br></br>
        <li>Missing ingredients? No problem! Check off the missing
          ingredients and add them to your shopping list. 
        </li>
        <br></br>
        <li>
          Ready to start searching for recipes? Click on the 
          <button
            onClick={() => {
              history.push("/search");
            }}>Search</button> button.
        </li>
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
