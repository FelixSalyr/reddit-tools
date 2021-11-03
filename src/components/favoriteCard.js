// UI Component imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function FavoriteCard({favorite, index}) {
    return(
        <Card sx={{ 
            display: 'flex', 
            flex: '1 0 46%',
            margin: '5px'
        }} key={index}>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image={favorite.thumbnail}
                alt={`thumbnail for ${favorite.title}`}
            />
            <Box sx={{display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        <Link href="#" color="inherit" underline="none">
                            {favorite.title}
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {favorite.subreddit}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}