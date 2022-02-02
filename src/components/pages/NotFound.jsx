import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <Card sx={{
            maxWidth: 345,
            position: 'absolute',
            top: '50%',
            width: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/id/119/500"
                alt="green iguana"
            />
            <CardContent sx={{textAlign:'center'}}>
                <Typography gutterBottom variant="h5" component="div">
                    Page Not Found
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'center'}}>
                <Button size="small" onClick={() => { navigate("/") }}>Go to Homepage</Button>
            </CardActions>
        </Card>
    );
}