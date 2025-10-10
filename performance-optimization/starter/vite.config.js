import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['jotai/babel/preset'],
        // plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
  ],
});
