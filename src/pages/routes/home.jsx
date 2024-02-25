import { Grid, makeStyles } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  const nftImages = [
    { id: 1, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 1' },
    { id: 2, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 2' },
    { id: 3, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 3' },
    { id: 4, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 1' },
    { id: 5, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 2' },
    { id: 6, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 3' },
    { id: 7, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 1' },
    { id: 8, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 2' },
    { id: 9, imageUrl: 'https://placekitten.com/g/200/200', title: 'NFT Image 3' },
  ];

  return (
    <div id="contact">
        <Grid container spacing={3}>
          {nftImages.map((nft) => (
            <Grid item key={nft.id} xs={12} sm={6} md={4}>
              {/* <Card>
                <CardMedia
                  image={nft.imageUrl}
                  title={nft.title}
                />
                <Typography variant="h6" align="center" gutterBottom>
                  {nft.title}
                </Typography>
              </Card> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={nft.imageUrl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {nft.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}
