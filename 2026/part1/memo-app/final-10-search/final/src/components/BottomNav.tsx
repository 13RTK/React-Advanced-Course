import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

import { useLocation, useNavigate } from '@tanstack/react-router';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(_event, newValue: string) => {
          navigate({
            to: newValue,
          });
        }}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" value="/add" icon={<AddIcon />} />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
