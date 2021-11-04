import React, { useContext, useState } from 'react';
import { AppBar, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CircularProgress from '@mui/material/CircularProgress';
import { ColorModeContext } from '../providers/ColorModeProvider'
import { useAuth } from '../providers/AuthProvider';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Header = () => {
    const { currentUser, setCurrentUser } = useAuth();
    const { mode, toggleMode } = useContext(ColorModeContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (e) => {
      setAnchorEl(null);
    };

    const logout = () => {
      handleClose();
      setLoading(true);
      fetch(`http://localhost:3000/logout`, {
            method: 'GET',
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
        .then(setLoading(false))
        .then(setCurrentUser(null));
    }

    return (
        <AppBar position="absolute">
        <Toolbar> 
        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="48" viewBox="-24.7599 -36.77075 214.5858 220.6245"><path d="M165.066 74.832c0-9.976-8.087-18.062-18.063-18.062-4.87 0-9.28 1.935-12.527 5.067-12.348-8.91-29.36-14.663-48.305-15.325L94.398 7.8l26.883 5.716c.328 6.834 5.924 12.288 12.84 12.288 7.126 0 12.901-5.775 12.901-12.902 0-7.125-5.775-12.902-12.9-12.902-5.07 0-9.412 2.95-11.52 7.202L92.582.822a3.227 3.227 0 00-3.825 2.483L79.57 46.501c-19.225.534-36.51 6.295-49.016 15.304-3.244-3.113-7.64-5.035-12.49-5.035C8.089 56.77 0 64.856 0 74.832c0 7.34 4.386 13.644 10.673 16.47a35.578 35.578 0 00-.431 5.463c0 27.79 32.347 50.318 72.25 50.318 39.905 0 72.252-22.528 72.252-50.318 0-1.834-.15-3.643-.424-5.427 6.326-2.81 10.746-9.137 10.746-16.506" fill="#fff"/></svg>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Reddit Favorite Finder
            </Typography>
            { currentUser &&
              <>
                <Button
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  disabled={loading}
                  endIcon={loading ? <CircularProgress color="inherit" /> : <AccountCircle />}
                >
                  {currentUser.name}
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={logout} id='LogoutMenuItem'>Logout</MenuItem>
                </Menu>
              </>
            }
            <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Toolbar>
      
        </AppBar>
    )
}

export default Header;

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

// function Header() {
//     const [open, setOpen] = React.useState(true);

//     const toggleDrawer = () => {
//         setOpen(!open);
//     }
// }