import React from 'react';

import { CssBaseline } from '@mui/material';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ColorModeProvider } from './providers/ColorModeProvider';
import { AuthProvider } from './providers/AuthProvider';
import Main from './Main';

export default function App() {
  
  let user = sessionStorage.getItem('user');

  return (
    <ColorModeProvider>
    <AuthProvider user={user}>
      <CssBaseline />
      <Main />
    </AuthProvider>
    </ColorModeProvider>
  );
}