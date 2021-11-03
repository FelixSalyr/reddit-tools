import * as React from 'react';
import PropTypes from 'prop-types';
// Custom Component imports
import FavoriteCard from './favoriteCard';
// UI Component imports
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { getOnlyKey, getOnlyValue } from '../utilities/objects';

function TabPanel({children, index, favorites, ...other}){

    return (
        <div
            role="tabpanel"
            id={`subreddit-tab`}
            aria-labelledby={`subreddit-tab`}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                {favorites.map((fav, i) => 
                    <FavoriteCard favorite={fav} index={i}/>
                )}
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    favorites: PropTypes.array.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function getFavoritesByIndex(subreddits, index) {
    let currentTab = Object.keys(subreddits[index])[0];
    return subreddits[index][currentTab]
}

export default function SubredditTabs({ subreddits }) {
    const [index, setIndex] = React.useState(0);
    const [favorites, setFavorites] = React.useState(getFavoritesByIndex(subreddits, 0));
  
    const handleChange = (event, newIndex) => {
        setFavorites(getFavoritesByIndex(subreddits, newIndex));
        setIndex(newIndex);
    };
  
    subreddits.map((sub, i) => 
                console.log(sub)
    )

    return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ borderBottom: 1, borderColor: 'divider', borderRadius: 0 }} elevation={0}>
          <Tabs value={index} 
            onChange={handleChange} 
            aria-label="Subreddit tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            {subreddits.map((sub, i) => 
                <Tab 
                    label={`${getOnlyKey(sub)} (${getOnlyValue(sub).length})`} 
                    {...a11yProps(i)} />
                
            )}
          </Tabs>
        </Paper>
        <TabPanel index={index} favorites={favorites} />
      </Box>
    );
  }