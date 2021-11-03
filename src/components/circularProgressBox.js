// React Imports
import React from 'react';
// UI Component imports
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

export const CircularProgressBox = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}