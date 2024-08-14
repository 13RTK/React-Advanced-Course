import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import zIndex from '@mui/material/styles/zIndex';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ position: 'fixed', top: '0', width: '100%', zIndex: '1' }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Alex Memos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
