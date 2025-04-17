import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ThreeDPortfolio/', // 👈 this line is critical!
  plugins: [react()],
});

