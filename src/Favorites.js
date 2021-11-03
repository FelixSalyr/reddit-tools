import React, { useEffect, useState } from 'react';
import { useAuth } from './providers/AuthProvider';
// Custom Component imports
import { CircularProgressBox } from './components/circularProgressBox';
import FavoriteCard from './components/favoriteCard';
import SubredditTabs from './components/SubredditTabPannel';
// UI Component imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import services
import { getSaved } from './services/historyService';
// import utilities
import { groupBy, getOnlyValue } from './utilities/objects';


export default function Favorites() {

    const { currentUser, setCurrentUser } = useAuth();
    const [favorites, setFavorites] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/history/saved`, {
            method: 'GET',
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then((response) => {
                if(response.status!==200)
                    throw new Error(response.status);
                return response.json()
            })
            .then(setFavorites)
            .then(()=> setLoading(false))
            .catch((err) => {
                if(err.message === "401")
                    setCurrentUser(null);
                setError(err);
            }
        );
    }, [currentUser]);

    if (loading && !error) return <CircularProgressBox />;
    if (error) return <pre>There was an oops: {JSON.stringify(error)}</pre>
    if (!favorites) return null;

    console.log(favorites);
    let subreddits = groupBy(favorites, 'subreddit')
    
    subreddits = Object.keys(subreddits)
        // convert to simple objects {subredditName: Array<Favorites>}
        .map((sub, i) => ({[sub]: subreddits[sub]}))
        // Sort DESC by number of favorites
        .sort((a, b) => (getOnlyValue(a).length < getOnlyValue(b).length) ? 1 : -1);

    return (
        <>
            <SubredditTabs subreddits={subreddits} /> 
        </>
    )
}

/*
const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!userName) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then(setData)
        .then(()=> setLoading(false))
        .catch(setError);
    }, [userName]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>There was an oops: {JSON.stringify(error, null, 2)}</pre>
    if (!data) return null;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.location}</p>
            <img alt={data.login} src={data.avatar_url}/>
        </div>
    )
*/