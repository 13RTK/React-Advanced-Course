import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function BottomNavBar() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    if (pathname === '/') {
      setValue(0);
    }

    if (pathname === '/add') {
      setValue(1);
    }

    if (pathname === '/search') {
      setValue(2);
    }
  }, [location.pathname]);

  return (
    <Box style={{ position: 'fixed', bottom: '0', width: '100%' }}>
      <BottomNavigation showLabels value={value}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="Add"
          icon={<AddIcon />}
          onClick={() => navigate('/add')}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          onClick={() => navigate('/search')}
        />
      </BottomNavigation>
    </Box>
  );
}
