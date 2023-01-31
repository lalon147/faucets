import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import SelectCurrency from './SelectCurrency';
import ModalComponent from './ModalComponent';




const Appbar = () => {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar color='inherit' position="static">
      <Toolbar>
        <Typography fontWeight={700} fontFamily={"Varela Round"} color={"#9b1fe9"} variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Faucets
        </Typography>

        <SelectCurrency></SelectCurrency>
        <ModalComponent></ModalComponent>
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
             
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
                onClick={handleClose}
              >
                <MenuItem><Link style={{textDecoration:"none",color:"black"}} color='black' to="/login">Log In</Link></MenuItem>
                <MenuItem><Link style={{textDecoration:"none",color:"black"}}  to="/register">Sign Up</Link></MenuItem>
                <MenuItem><Link style={{textDecoration:"none",color:"black"}} to="/faq">FAQ</Link></MenuItem>
              </Menu>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Appbar