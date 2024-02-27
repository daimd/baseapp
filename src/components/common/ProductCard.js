import React from 'react';
import { Card, CardContent, Typography, Button, Rating, Box, IconButton, Badge,Paper  } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const paperStyle = {
    justifyContent: 'center',
    margin: '23px',
    width: 120,
    height: 120,
    padding: '16px', 
    textAlign: 'center',
    backgroundColor: 'red',
}

const ProductCard = ({ imageSrc, title, id, rating, salesDiscount, price, quantity, available }) => {

   // Format the price to have three decimal places
   const formattedPrice = price.toFixed(2);
  return (
    <div className="productCard" style={{ justifyContent: 'center',height:"140", margin: '8px', 
    marginTop: '8px', marginRight: 'auto', width: '84%',
     display: 'block', color: '#FFFFFF'}}>
     
    <Card sx={{ maxWidth: 345 }}>
      {/* Image */}
      {/* <Paper elevation={0} sx={paperStyle} > */}
      <img src={imageSrc} alt={title} style={{ width: '100%', height: 'auto' }} />
        {/* </Paper> */}
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 'bold'}} gutterBottom>
          {title}
        </Typography>

        {/* ID */}
        <Typography variant="body1" sx={{ fontWeight: 'bold'}} gutterBottom>
          ID: {id}
        </Typography>

        {/* Rating and Sales Discount */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Rating name="product-rating" value={rating} readOnly />
          <Typography variant="body2" fontWeight="bold" color="red">
            {salesDiscount}% Off
          </Typography>
        </Box>

        {/* Price and Cart Quantity */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
            $ {formattedPrice}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="Add to cart">
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>

        {/* Availability */}
        <Button variant="contained" disabled={!available}  style={{ backgroundColor: '#00CA1480', // Make background transparent
         color: '#FFFCFC',borderRadius: '20px', fontWeight:"bold", boxShadow: 'none',
         fontSize:"small", textTransform: 'none', }}>{available ? 'Available' : 'Not Available'}</Button>
      
      </CardContent>
    </Card>
    </div>
  );
}

export default ProductCard;
