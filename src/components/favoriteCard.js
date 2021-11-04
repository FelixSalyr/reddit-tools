// UI Component imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SvgIcon from '@mui/material/SvgIcon';
// css imports
import './favoriteCard.css';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  function LinkIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
      </SvgIcon>
    );
  }

export default function FavoriteCard({favorite, index}) {

    const hasThumb = (favorite.thumbnail && favorite.thumbnail !== 'default' && favorite.thumbnail !== 'self');

    return(
        <Card className="favorite-card" key={index}>
            <Box className="card-media__wrapper" 
                sx={{background: (theme) => 
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[hasThumb ? 800 : 300]
                    : theme.palette.grey[800]}} >
                <Link href={favorite.url}>
                    {hasThumb ?
                        <>
                        <Box component="div" className="card-media__background" 
                            sx={{ backgroundImage: `url(${favorite.thumbnail})` }}/>

                        <CardMedia component="img"
                            sx={{height: 140, boxShadow: '0 0 15px -3px rgb(255 255 255 / 26%)'}}
                            image={favorite.thumbnail}
                            alt={`thumbnail for ${favorite.title}`}
                        />
                        </> :
                        <LinkIcon sx={{fontSize: 80}} color="action" />
                    }
                </Link>
            </Box>
            <Box className="card-content__wrapper" >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography 
                        component="div" 
                        variant="h6" 
                        sx={{ 
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap' }}
                    >
                        <Link href={favorite.url} color="inherit" underline="none" title={favorite.title}>
                            {favorite.title}
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <Link href={`http://reddit.com/r/${favorite.subreddit}`} color="inherit" underline="none">
                            r/{favorite.subreddit}
                        </Link>
                        {bull}
                        <Link href={`http://reddit.com${favorite.comments}`} color="inherit" underline="none">
                            comments
                        </Link>
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}