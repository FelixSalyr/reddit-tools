import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Paper component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Reddit Username"
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
    
}

export default SearchBar;