import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import { Typography, Link } from '@mui/material';
import Button from '@mui/material/Button';

import { useAuth } from '../providers/AuthProvider';

const RedditLoginCard = () => {

    const login = () => {
        window.location.href = 'http://localhost:3000/auth/reddit';
    }

    // Default UI
    return (
        <Card component="form"
            sx={{ width: 400 }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Reddit Favorite Finder
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    A Project By&nbsp; 
                    <Link href="https://github.com/FelixSalyr" color="inherit">
                        Brett Holmes
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                Welcome to my personal project site! I am an experienced
                web developer who has created this website while 
                opportunity to learn both React.js and Node.js. Its 
                purpose is to help visualize your reddit saved posts.
                </Typography>
                <Typography>
                In order to access your Reddit account information, 
                you will need to authorize this application.
                </Typography>
            </CardContent>
            <CardActions
                sx={{display: 'flex', justifyContent: 'center'}}
            >
                <Button variant="contained" onClick={login}>Login with Reddit</Button>
            </CardActions>
        </Card>
    );
}

export default RedditLoginCard;