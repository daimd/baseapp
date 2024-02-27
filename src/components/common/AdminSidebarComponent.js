import React from 'react';
import { List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;


const NavigationSidebar = () => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    marginTop: '65px', // Height of the app bar
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
{/* 
        <Toolbar /> */}
        <List>
            <ListItem component={Link} to="/dashboard">
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component={Link} to="/product">
                <ListItemText primary="Product" />
            </ListItem>
            <ListItem component={Link} to="/user">
                <ListItemText primary="User" />
            </ListItem>
            <ListItem component={Link} to="/order">
                <ListItemText primary="Order" />
            </ListItem>
            <ListItem component={Link} to="/settings">
                <ListItemText primary="Settings" />
            </ListItem>
        </List>
    </Drawer>
    
    );
};


export default NavigationSidebar;
