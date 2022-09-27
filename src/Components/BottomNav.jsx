import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import { useNavigate} from 'react-router-dom';
import './bottomNav.css'
export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => { 
    if(value === 0) navigate("/");
    if(value === 1) navigate("/movies");
    if(value === 2) navigate("/series");
    if(value === 3) navigate("/search");
  }, [value]);
  return (
    <Box className='box' sx={{ 
      width: "100%" , 
      position: 'fixed', 
      bottom: 0,
      zIndex : 100,
      }}>
      <BottomNavigation
        style={{backgroundColor: '#bb861f'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color: 'white'}}  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: 'white'}}  label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: 'white'}}  label="Serie" icon={<TvIcon />} />
        <BottomNavigationAction style={{color: 'white'}}  label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}