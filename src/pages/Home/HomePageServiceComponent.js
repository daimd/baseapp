import React from 'react';
import { Card } from '@mui/material';
import CustomCard from '../../components/common/CustomCard';

const cardWidthPercentage = 20; // Adjust the width percentage of each card
const numCards = 5; // Adjust the number of cards

const HomePageServiceComponent = () => {
  const totalCards = numCards * 2; // Double the number of cards to ensure continuous scrolling
  
  return (
    <div className="body" style={{ justifyContent: 'center', marginLeft: 'auto', marginTop: '8px', marginRight: 'auto', width: '84%', display: 'block', color: '#FFFFFF', overflow: 'hidden' }}>
      <div className="service" style={{ display: 'flex', gap: '16px', animation: `scrollAnimation ${totalCards * 3}s linear infinite`, width: `${cardWidthPercentage * totalCards}%` }}>
        {[...Array(totalCards)].map((_, index) => (
          <CustomCard
            key={index}
            title="Free Shipping"
            description="For orders from $50"
            style={{ width: `${cardWidthPercentage}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePageServiceComponent;
