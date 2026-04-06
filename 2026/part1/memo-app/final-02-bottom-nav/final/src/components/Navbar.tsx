import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          align="center"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Alex Memo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
