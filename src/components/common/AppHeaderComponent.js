import React, { useState } from 'react';
import { Toolbar, IconButton, Menu, MenuItem, Avatar, Typography,AppBar,Grid, TextField, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginModal from './LoginModel';
import './appHeaderComp.css'
import MenuIcon from '@mui/icons-material/Menu';

const AppHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable for user authentication status
    const [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State variable for modal open/close
    const title = 'Shop APP';

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogin = () => {
        setIsModalOpen(true); // Open the modal when "Login" option is clicked
        handleMenuClose(); // Close the dropdown menu
    };

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };
    const navItems = ['About Us', 'Contacts', 'Store', 'Track Orders']; 
    return (
        <AppBar style={{ position: "relative", boxShadow: "none", backgroundColor: "white"}}>
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
        <div className="lower_appbar" style={{ backgroundColor: '#FFD700', width: '100%', marginBottom: '6px', display: 'block', justifyContent: 'center', alignItems: 'center' }}>
        <Toolbar className="lower_appbar_toolbar">
      <div className="logo-search">
        <Typography variant="h4" className="logo" fontWeight={'bold'} sx={{paddingRight: '8px', whiteSpace: 'nowrap' }}>
          {title}
        </Typography>

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
                {/* Other header content */}
                <div className="cart-profile">
                    <IconButton color="inherit">
                    <ShoppingCartIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        {isLoggedIn ? (
                            <Avatar src="/user-avatar.jpg" alt="User Avatar" /> // Render custom avatar for logged-in user
                        ) : (
                            <Avatar ></Avatar> // Default grey avatar for non-logged-in user
                        )}
                    </IconButton>
                    {/* Dropdown menu */}
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
                        {isLoggedIn ? (
                            <>
                                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                            </>
                        ) : (
                            <MenuItem onClick={handleLogin}>Login</MenuItem> // Display login option if user is not logged in
                        )}
                    </Menu>
                </div>
            </Toolbar>
            <LoginModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> {/* Render the LoginModal component */}
        </div>

        </AppBar>
    );
}

export default AppHeader;
