import React from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from "@material-ui/core/MenuItem";

function LogOutButton(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogOut = () => {
    setAnchorEl(event.currentTarget);
    dispatch({ type: "LOGOUT" });
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuItem
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => handleLogOut()}
    >
      Log Out
    </MenuItem>
  );
}

export default LogOutButton;
