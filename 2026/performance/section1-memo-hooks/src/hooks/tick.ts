import { useEffect, useState } from 'react';

export function useTick() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTick((currentTick) => currentTick + 1);
    }, 800);

    return () => window.clearInterval(intervalId);
  }, []);

  return tick;
}
