import { Button } from '@mui/material';

import styles from './Home.module.css';

import { useCurrentWeather } from '../../hooks/useCurrentWeather';

import Day from './Day';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';

function Home({ position }) {
  const { temperature, weatherIcon, isLoading } = useCurrentWeather(position);

  const navigate = useNavigate();

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
