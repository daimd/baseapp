import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const CustomCard = ({ title, description }) => {
  return (
    <Card style={{ display: 'flex', marginBottom: '16px', height: '81px', border: '1px solid #DFD8D8', boxShadow: 'none'}}>
      <CardMedia
        component={LocalShippingIcon}
        style={{ fontSize: '50px',marginLeft: '16px', marginRight: '16px' , }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
