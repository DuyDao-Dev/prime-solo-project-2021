import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, to No Thyme {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Where having No Thyme, saves time.</h3>
      <ul>
        <li>
          With No Thyme you can enter your ingredients you have on hand and
          search for recipes matching those ingredients.
        </li>
        <li>Enjoy those recipes? Add them to your favorites! </li>
        <li>Missing ingredients? No problem! Check off the missing
          ingredients and add them to your shopping list. 
        </li>
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
