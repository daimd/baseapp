import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ComputerComponent() {
  return (
    <div className="details" style={{ width: '100%'  }}>
        <div className="top_card" style={{  width: '100%' , marginBottom: '16px'  }}>
          <Card sx={{ display: 'flex', gap: '8px',boxShadow: 'none', border: '1px solid #DFD8D8' }}>
              <CardActionArea>
                  <CardMedia
                  component="img"
                  height="140"
                  image="/compPhotos.png"
                  alt="green iguana"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                  </Typography>
                  </CardContent>
              </CardActionArea>
              </Card>
         </div>

        <div className="lowe_card" style={{ width: '100%',}} >
            <div style={{ display: 'flex', gap: '8px'  }}>
              <Card variant="outlined"sx={{ display: 'flex', gap: '8px',boxShadow: 'none', border: '1px solid #DFD8D8' }} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/compPhotos.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              {/* Repeat this Card component to render three cards */}
              <Card variant="outlined"sx={{ display: 'flex', gap: '8px',boxShadow: 'none', border: '1px solid #DFD8D8' }}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/compPhotos.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card variant="outlined" sx={{ display: 'flex', gap: '8px',boxShadow: 'none', border: '1px solid #DFD8D8' }}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/compPhotos.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
        </div>
    </div>
  );
}