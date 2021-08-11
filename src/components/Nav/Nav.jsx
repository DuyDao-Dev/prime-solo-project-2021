import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">No Thyme</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        <Link className="navLink" to="/search">
          Search
        </Link>
        <Link className="navLink" to="/favorite">
          Favorite Recipes
        </Link>
        <Link className="navLink" to="/shopping">
          Shopping List
        </Link>
        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;


  // return (
  //   <div className={classes.root}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <MenuIcon
  //           aria-controls="simple-menu"
  //           aria-haspopup="true"
  //           onClick={handleClick}
  //         />
  //         <Menu
  //           id="simple-menu"
  //           anchorEl={anchorEl}
  //           keepMounted
  //           open={Boolean(anchorEl)}
  //           onClose={handleClose}
  //         >
  //           <MenuItem onClick={handleClose}>Profile</MenuItem>
  //           <MenuItem onClick={handleClose}>My account</MenuItem>
  //           <MenuItem onClick={handleClose}>Logout</MenuItem>
  //         </Menu>
  //         {/* </IconButton> */}
  //         <Typography variant="h6" className={classes.title}>
  //           No Thyme
  //         </Typography>
  //         <Button color="inherit">Login</Button>
  //       </Toolbar>
  //     </AppBar>
  //   </div>
  // );