import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function DogCard({ dogs }) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <h4>{dogs.name}</h4>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <p>{dogs.breed}</p>
                </Typography>
                <Typography variant="img" component="div">
                    <img src={dogs.image} alt={dogs.breed} />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card >
    );
}

export default DogCard;