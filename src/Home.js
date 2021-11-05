// React Imports
import React from 'react';
// Page imports
import Favorites from './Favorites';
// UI Component imports
import { Box } from '@mui/system';
import Container from '@mui/material/Container'
// Custom Component Imports
import RedditLoginCard from './components/redditLoginCard';
import { CircularProgressBox } from './components/circularProgressBox';
// Hook imports
import { useAuth } from './providers/AuthProvider';

/**
 * To be replaced by Routing later, but for now, this component
 * toggles the interface between the auth states
 * @param {boolean} loading - inherit loading state from parent
 */
export default function Home({ loading }) {
    // Consuming our auth Hook. 
    const { currentUser } = useAuth();

    // Loading state UI
    if (loading) return <CircularProgressBox />;

    return (
        <>
          { (currentUser)
            ? <Favorites/>
            : <Container className="App" sx={{ mt: 4, mb: 4 }}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <RedditLoginCard />
                </Box>
              </Container>
          }
        </>
    );
}