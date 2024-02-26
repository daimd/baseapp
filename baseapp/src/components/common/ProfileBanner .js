import React from 'react';
import { Button,Typography } from '@mui/material';

const ProfileBanner = () => {
  return (
    
    <div className="profileBanner" style={{ justifyContent: 'center', marginLeft: 'auto', marginTop: '8px', marginRight: 'auto', width: '84%', display: 'block', color: '#FFFFFF', overflow: 'hidden' }}>
     
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color:"#212529" }}>
      <div style={{ marginLeft: '20px' }}>
      <Typography gutterBottom variant="h6" component="div"style={{ fontWeight:"bold"}}>
          Bestseller
        </Typography>
      </div>
      <Button variant="outlined" style={{ backgroundColor: 'transparent', // Make background transparent
        border: '2px solid #FFD333', color: '#000000',borderRadius: '20px', fontWeight:"bold", fontSize:"small", textTransform: 'none', }}>Show more ...</Button>
      </div>
    </div>
  );
}

export default ProfileBanner;
