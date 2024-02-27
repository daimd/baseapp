import React from 'react';
import { useState } from 'react';
import './appHeaderComp.css'

import { Popover,InputLabel,Box,Divider, List,Chip , ListItem, ListItemText,AppBar,Stack, Toolbar, Typography,Select, IconButton, Menu,Input, MenuItem, Avatar, TextField ,Grid} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CenterFocusWeakTwoTone } from '@mui/icons-material';

import * as home from '../../pages/Home/home.css'

const navItems = ['About Us', 'Contacts', 'Store', 'Track Orders']; 
const getMenuItems = ['computer', 'handTools', 'machineTools', 'powerTools', 'storageTools', 'clothesAndPpe', 'electrical', 'buildingTools', 'foods', 'drinks'];


const AppHeader = () => {
    
    const title = 'Shop APP';

    const [searchValue, setSearchValue] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [categoryMenu, setCategoryMenu] = useState('Category');

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (menuItem) => {
        setCategoryMenu(menuItem);
        handleMenuClose();
      };
 
      const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
      };
   return (
    <AppBar style={{ position: "relative", boxShadow: "none" }}>
  <div className="top_appbar" >
    <Toolbar className="top_appbar_toolbar" >
      <Grid container alignItems="center">
        {navItems.map((item, index) => (
          <Typography
            key={index}
            variant="subtitle1"
            className="nav-item"
          >
            {item}
          </Typography>
        ))}
      </Grid>
    </Toolbar>
  </div>
  <div className="lower_appbar" style={{backgroundColor: '#FFD700', width: '100%', paddingBottom: '6px', display: 'block', justifyContent: 'center', alignItems: 'center' }}>
    <Toolbar className="lower_appbar_toolbar">
      <div className="logo-search">
        <Typography variant="h4" className="logo" fontWeight={'bold'} sx={{paddingRight: '8px', whiteSpace: 'nowrap' }}>
          {title}
        </Typography>


        {/* <div className="search-field">
          <InputLabel>
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            Categories
          </InputLabel>
          <Divider orientation="vertical" flexItem />
          <TextField
            placeholder="Search Items"
            value={searchValue}
            size="medium"
            fullWidth
            onChange={handleSearchInputChange}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {getMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </div> */}
      </div>
      {/* <div style={{paddingLeft:'8px'}} > */}
            <TextField
            className="search-field" 
                placeholder="Search Items"
                size="small"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <Chip
                      icon={<MenuIcon />}
                      label="Category"
                      disabled={true}
                      onDelete={() => {
                      // Handle delete event
                      }}
                      deleteIcon={<div />} // Empty div to hide the delete icon
                      sx={{
                      backgroundColor: 'transparent', // Set background to transparent
                      marginRight: '8px', // Adjust spacing between chip and text field
                      '& .MuiChip-deleteIcon': {
                          display: 'none', // Hide the delete icon
                      },
                      '& .MuiChip-icon': {
                          marginRight: '4px', // Adjust spacing between icon and label
                      },
                      '& .MuiChip-label': {
                          fontWeight: 'bold', // Make label bold
                          fontSize: '1.2rem', // Increase font size
                          color: 'black', // Set label color to black
                          display: 'flex',
                          alignItems: 'center',
                      },
                      }}
                  />
                    ),
                    endAdornment: (
                    <SearchIcon />
                    ),
                }}
                />
        {/* </div> */}
      <div className="cart-profile">
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <Avatar src="/broken-image.jpg" alt="User Avatar" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Toolbar>
  </div>
</AppBar>

   );
 
}
export default AppHeader;
