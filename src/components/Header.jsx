import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'
// import Featured from '../featured/Featured';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  MenuItem,
  Menu,
  IconButton,
  
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';


function Header() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onLogout =()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  const [auth, setAuth] = React.useState(true);

 const onChange =()=>{
  navigate('/login')
 }
  return (
    <React.Fragment>
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
      <Tab label="DREAMLAND"sx={{ color: "warning" }} />
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
              Shoppee
            </Typography>
            {/* <DrawerComp /> */}
          </>
        ) : (
          <>
            <Tabs
              sx={{ paddingLeft: "10%" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="HOME" />
              <Tab onClick={()=>navigate('/about')} label="ABOUT" />
              
              <Tab onClick={()=>navigate('/contact')} label="Contact" />
            </Tabs>
            {auth && (
            <div style={{marginLeft: "auto"}}>
              
        
        
      
              {user ? (<IconButton
               
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              {user.name}
              </IconButton>
              
              ) : (<IconButton
               
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              My Account
              </IconButton>)}

              {user ? ( <Menu
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
               <MenuItem  onChange={onChange} onClick={()=>navigate('/profile')}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={onLogout} >Logout</MenuItem>
              </Menu>
               ) : (
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
              
              <MenuItem onClick={()=>navigate('/register')} >Register</MenuItem>
                <MenuItem onClick={()=>navigate('/login')} >Login</MenuItem>
              </Menu>)}
            </div>
          )}
            {/* <Button onClick={()=>navigate('/login')} sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
            <Button sx={{ marginLeft: "10px" }} variant="contained">
              SignUp
            </Button> */}
          </>
        )}
      </Toolbar>
    </AppBar>
    
  </React.Fragment>
  )
}

export default Header

