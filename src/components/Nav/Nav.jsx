//Material UI Nav Bar
import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogInButton from "../LogInButton/LogInButton";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "animate.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((store) => store.user);
  const history = useHistory();

  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  if (user.id != null) {
    loginLinkData.path = "/user";
    // loginLinkData.text = "Home";
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              className="navLink"
              to={loginLinkData.path}
              onClick={handleClose}
            >
              {loginLinkData.text}
            </MenuItem>
            {user.id && (
              <>
                <MenuItem
                  className="navLink"
                  onClick={() => {
                    history.push("/home");
                    handleClose();
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  className="navLink"
                  onClick={() => {
                    history.push("/search");
                    handleClose();
                  }}
                >
                  Search
                </MenuItem>
                <MenuItem
                  className="navLink"
                  onClick={() => {
                    history.push("/favorite");
                    handleClose();
                  }}
                >
                  Favorite Recipes
                </MenuItem>
                <MenuItem
                  className="navLink"
                  onClick={() => {
                    history.push("/shopping");
                    handleClose();
                  }}
                >
                  Shopping List
                </MenuItem>
                <MenuItem
                  className="navLink"
                  onClick={() => {
                    history.push("/about");
                    handleClose();
                  }}
                >
                  About
                </MenuItem>
                <LogOutButton className="navLink" />
              </>
            )}
          </Menu>
          {/* </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <div>
              <h2 class="animate__animated animate__fadeInDown">No Thyme</h2>
            </div>
          </Typography>
          <LogInButton />
          {/* <Button
            color="inherit"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;


//Original Link codes
// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
// import {useSelector} from 'react-redux';

// function Nav() {
//   const user = useSelector((store) => store.user);

  // let loginLinkData = {
  //   path: '/login',
  //   text: 'Login / Register',
  // };

  // if (user.id != null) {
  //   loginLinkData.path = '/user';
  //   loginLinkData.text = 'Home';
  // }

//   return (
//     <div className="nav">
//       <Link to="/home">
//         <h2 className="nav-title">No Thyme</h2>
//       </Link>
//       <div>
//         <Link className="navLink" to={loginLinkData.path}>
//           {loginLinkData.text}
//         </Link>
//         <Link className="navLink" to="/search">
//           Search
//         </Link>
//         <Link className="navLink" to="/favorite">
//           Favorite Recipes
//         </Link>
//         <Link className="navLink" to="/shopping">
//           Shopping List
//         </Link>
//         {user.id && (
//           <>
//             <Link className="navLink" to="/info">
//               Info Page
//             </Link>
//             <LogOutButton className="navLink" />
//           </>
//         )}

//         <Link className="navLink" to="/about">
//           About
//         </Link>
// //       </div>
//     </div>
//   );
// }

// export default Nav;



