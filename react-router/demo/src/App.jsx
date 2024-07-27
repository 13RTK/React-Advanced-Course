import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useGeolocation } from './hooks/useGeolocation';

import AppLayout from './ui/AppLayout';

import Home from './features/home/Home';
import Forecast from './features/forecast/Forecast';

function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Routes>
      <Route element={<AppLayout isLoading={isLoading} />}>
        <Route path="/" element={<Home position={position} />} />
        <Route path="/forecast" element={<Forecast position={position} />} />
      </Route>
    </Routes>
  );
}

export default App;
