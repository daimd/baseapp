
// HomePage.js
import React from 'react';
// import AppLayout from '../../components/layouts/AppLayout';// Assuming you have an AppLayout component
import AppHeader from '../../components/common/AppHeaderComponent';
import NavigationSidebarComponent from '../../components/common/NavigationSidebarComponent';
import HomePageServiceComponent from './HomePageServiceComponent';
import Divider from '@mui/material/Divider';
import ProductComponent from './ProductComponent';
import ProfileBanner from '../../components/common/ProfileBanner ';

const HomePage = () => {
     // Function to handle menu item clicks
     const handleMenuItemClick = (menuItem) => {
        // Perform any actions based on the selected menu item
        console.log('Clicked on menu item:', menuItem);
    };

 
    return (
        <div style={{marginTop: '8px'}}>
            <div className="body" style={{ width: '100%',paddingTop: '8px',display: 'block', justifyContent: 'center', alignItems: 'center' }}>

                    {/* Render the app header component */}
                    {/* <AppHeader></AppHeader> */}
                    {/* Render the side-nav and the details component */}
                    <NavigationSidebarComponent onMenuItemClick={handleMenuItemClick} />
                    
                    <Divider orientation="vertical" flexItem />
                    <HomePageServiceComponent  />
                    
                    <ProfileBanner/>
                    <Divider orientation="vertical" flexItem />
                    
                    <ProductComponent/>

                    <div className="service"></div>
                    <div className="promo"></div>
                    <div className="product_card"></div>
            </div>   

            <div style={{ display: 'flex', height: '100vh' }}>
            
        </div>
        </div>
    );
};

export default HomePage;
