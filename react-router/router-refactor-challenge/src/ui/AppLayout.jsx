import { Outlet } from 'react-router-dom';

import Container from './Container';
import Loading from './Loading';

function AppLayout({ isLoading }) {
  return <Container>{isLoading ? <Loading /> : <Outlet />}</Container>;
}
export default AppLayout;
