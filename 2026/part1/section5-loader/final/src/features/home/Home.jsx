import { Button } from '@mui/material';

import styles from './Home.module.css';

import { useCurrentWeather } from '../../hooks/useCurrentWeather';

import Day from './Day';
import Loading from '../../ui/Loading';
import { useNavigate, useRouteLoaderData } from 'react-router';

function Home() {
  const navigate = useNavigate();
  const position = useRouteLoaderData('root');

  const { temperature, weatherIcon, isLoading } = useCurrentWeather(position);

  return (
    <section className={styles.section}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Day temperature={temperature} icon={weatherIcon} />
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/forecast')}
          >
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;
