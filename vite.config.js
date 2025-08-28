import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: use your REPO name here, with slashes
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',   // <= replace with your repo name if different
});
