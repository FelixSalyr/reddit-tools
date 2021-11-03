// React Imports
import React, { useEffect, useState } from 'react';
// UI Component imports
import { Box } from '@mui/system';

import Toolbar from '@mui/material/Toolbar';
// Custom Component Imports
import Header from './components/header';
// Page imports
import Home from './Home'
// Hook imports
import { useAuth } from './providers/AuthProvider';
// Import services
import { checkAuthSuccess } from './services/authService'

const Main = () => {
    const { setCurrentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // On mount, check our node.js server for our token status
    useEffect(() => {
        setLoading(true);
        checkAuthSuccess()
            // Set user based on auth response from the server
            .then(res => setCurrentUser(res.authenticated ? res.user : null))
            // catch errors
            .catch(setError)
            // finally, set loading as false
            .then(() => setLoading(false))
    }, []);

    // Error state UI
    if (error) return <pre>There was an oops: {JSON.stringify(error)}</pre>
    
    // Default UI
    return (
        <>
        <Box sx={{display: 'flex'}}>
            <Header />
        </Box>
        <Box component="main" sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[1000],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            
                {/* Empty tolbar Space placeholder */}
                <Toolbar />
                <Home loading={loading} />
            
        </Box>
      </>
    );
}

export default Main;