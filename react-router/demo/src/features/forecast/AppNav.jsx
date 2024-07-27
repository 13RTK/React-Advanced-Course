import { Link, Breadcrumbs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AppNav() {
  const navigate = useNavigate();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" href="#" onClick={() => navigate('/')}>
        Home
      </Link>
      <Link underline="always" color="inherit" href="#">
        Forecast
      </Link>
    </Breadcrumbs>
  );
}
export default AppNav;
