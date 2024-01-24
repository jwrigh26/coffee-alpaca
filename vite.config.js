import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/test-script': {
        target: 'http://localhost:5173/scripts/helloWorld.js',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test-script/, '')
      }
    }
  }
})
