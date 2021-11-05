import React, { useEffect, useState } from 'react';
import { useAuth } from './providers/AuthProvider';
// Custom Component imports
import { CircularProgressBox } from './components/circularProgressBox';
import SubredditTabs from './components/SubredditTabPannel';
// import utilities
import { groupBy, getOnlyValue } from './utilities/objects';

/**
 * Topmost component of the Favorites page. Currently 
 * just a wrapper for a subreddit tabs component that formats
 * and injects data
 */
export default function Favorites() {

    const { currentUser, setCurrentUser } = useAuth();
    const [favorites, setFavorites] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://nodeexpressoauth2reddit-env-1.eba-uf64jrde.us-east-1.elasticbeanstalk.com/history/saved`, {
            method: 'GET',
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            // Auth responses don't trigger errors
            // so we'll manually throw
            .then((response) => {
                if(response.status!==200)
                    throw new Error(response.status);
                return response.json()
            })
            .then(setFavorites)
            .then(()=> setLoading(false))
            .catch((err) => {
                // If bearer token expires, the API send
                // a 401, for now we'll log out so the 
                // user can choose to re-auth
                if(err.message === "401")
                    setCurrentUser(null);
                setError(err);
            }
        );
    }, [currentUser]);

    if (loading && !error) return <CircularProgressBox />;
    if (error) return <pre>There was an oops: {JSON.stringify(error)}</pre>
    if (!favorites) return null;

    // Group our favorites by subreddit
    let subreddits = groupBy(favorites, 'subreddit')
    // Data manipulation to a more usable format
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