import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { useGeolocation } from "./hooks/useGeolocation";

import AppLayout from "./ui/AppLayout";

import Home from "./features/home/Home";
import Forecast from "./features/forecast/Forecast";

function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();

  const navigate = useNavigate();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  function setNavigate() {
    navigate("/home");
  }

  return (
    <Routes>
      <Route element={<AppLayout isLoading={isLoading} />}>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home position={position} />} />
        <Route
          path="forecast"
          element={<Forecast position={position} setIsHome={setNavigate} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
