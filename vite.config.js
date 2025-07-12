import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
            host: true, // This exposes the server to the network
            // You can also specify a specific port if desired, e.g., port: 3000
          },
})
