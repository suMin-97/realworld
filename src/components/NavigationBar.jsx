import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import { Link as LinkRout, useNavigate } from "react-router-dom";
import { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavigationBar = () => {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <LinkRout
          style={{ color: "white", textDecoration: "none", flexGrow: 1 }}
          to="/"
        >
          <Typography variant="h6" component="div">
            Conduit
          </Typography>
        </LinkRout>
        {auth ? (
          <>
            <IconButton size="large" onClick={handleMenuOpen} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleNavigate("/profile/:username")}>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("/profile/:username/favorites")}
              >
                Favorites
              </MenuItem>
              <MenuItem onClick={() => setAuth(false)}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <LinkRout
              style={{ color: "white", textDecoration: "none" }}
              to="/login"
            >
              <Button color="inherit">Sign in</Button>
            </LinkRout>
            <LinkRout
              style={{ color: "white", textDecoration: "none" }}
              to="/register"
            >
              <Button color="inherit">Sign up</Button>
            </LinkRout>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
