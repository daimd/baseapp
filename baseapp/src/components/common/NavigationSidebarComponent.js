import React from 'react';
import {simulateGetMenuItems}  from '../../apis/navigationSidebarService';
import { useState, useEffect } from 'react';
import { List, ListItem, InputLabel, Grid, IconButton,ListItemText } from '@mui/material';
import { DetailComponent } from '../../pages/Home/DetailComponent';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationSidebarComponent = ({ onMenuItemClick }) => {
    const [menuItems, setMenuItems] = useState([]); // this list holds all the menuitems fetched from the server
    const [selectedItem, setSelectedItem] = useState(null); 
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchSideMenuItems = async () => {
        try {
          const response = await simulateGetMenuItems();
          if (response.length > 0) {
            setMenuItems(response);
            setSelectedItem(response[0]);
            onMenuItemClick(response[0]);
          } else {
            console.error('Response is empty');
          }
        } catch (error) {
          console.error(error);
          setError('An error occurred while fetching menu items. Please try again later.');
        }
      };
      fetchSideMenuItems();
    }, []);
  
    const handleItemClick = (menuItem) => {
      setSelectedItem(menuItem);
      onMenuItemClick(menuItem);
    };
  
    const handleMenuOpen = (event) => {
      console.log("Clicked");
    };
  
    return (
      <div>
        {error && <div>Error: {error}</div>}
        <Grid container spacing={2} justify={'center'} style={{ height: '100%' }}>
          <Grid item xl={3}>
            <div className="navSideBar" style={{ backgroundColor: '#5B5B5B', color: '#FFFFFF', borderRight: '1px solid #ccc' }}>
              <InputLabel style={{ color: '#FFFFFF' }}>
                <IconButton onClick={handleMenuOpen}>
                  <MenuIcon />
                </IconButton>
                Categories
              </InputLabel>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleItemClick(item)}
                    // onMouseEnter={() => handleItemClick(item)} // could include the hover action
                    style={{ backgroundColor: selectedItem === item ? 'gold' : '#5B5B5B' }}
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item xs={9} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ paddingLeft: '8px' }}>
              {selectedItem && (
                <div style={{ height: '100%' }}>
                  {/* Render component based on selectedItem */}
                  <DetailComponent sideNavSelectedItem={selectedItem} />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };
  
export default NavigationSidebarComponent