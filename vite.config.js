import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    fs: {
      allow: [
        // Add the following paths:
        'D:/Hospital Management/node_modules', // Explicit path to node_modules
        'D:/Hospital Management/frontend',     // Your frontend directory
      ],
    },
  },
});

