import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// React context is great when passing data that can be used in any component in your application
// e.g. Theme data, User data, location-specific data (language, locale)
const ColorModeContext = React.createContext({ mode: 'light', toggleMode: () => {} });
// Destructuring, can be used on Arrays and Objects. makes it possible 
// to unpack values from arrays, or properties from objects, into 
// distinct variables. Here ColorModeContext.Provider => Provider
const { Provider } = ColorModeContext;

const getModeFromStorage = () => {
    let mode = localStorage.getItem('mode');
    return mode ? mode : 'light';
}

const ColorModeProvider = props => {
    const [mode, setMode] = useState('light');
    // On mount, read the preferred theme from persistent data
    useEffect(() => setMode(getModeFromStorage()), []);

    const toggleMode = () => 
        setMode((prevMode) => {
            let m = (prevMode === 'light' ? 'dark' : 'light');
            localStorage.setItem('mode', m);
            return m;
        });

    // Use Memo is a react hook that returns a memorized value.
    // You pass a "create" function and an array of dependencies. it will only
    // recompute the memorized value when one of the dependencies has changed.
    // This optimization helps avoid expensive calculations on every render.
    // We've done that here because creating a theme can be expensive and
    // We only want to redo that calculation when necessary (Mode has changed)
    const theme = React.useMemo(
        () => {
            return createTheme({
                palette: {
                mode,
                },
            });
        },
        [mode],
    );

    // We return all the provider mark-up with props already populated
    // To keep the mark-up neat for files that import it
    return  <Provider value={{ mode, toggleMode }}>
                <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
            </Provider>;
};

export { ColorModeProvider, ColorModeContext };