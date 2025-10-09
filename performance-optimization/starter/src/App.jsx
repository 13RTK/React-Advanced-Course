import 'jotai-devtools/styles.css';

import { useEffect } from 'react';
import { DevTools } from 'jotai-devtools';
import { themeChange } from 'theme-change';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AddIdol from './components/AddIdol.jsx';
import Dialog from './components/Dialog.jsx';
import IdolList from './components/IdolList.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Dialog>
        <AddIdol />
      </Dialog>
      <IdolList />

      {/* <DevTools /> */}
    </QueryClientProvider>
  );
}
export default App;
