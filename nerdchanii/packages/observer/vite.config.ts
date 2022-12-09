import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  path: {
    alias: {
      '@types': '/src/types',
      '@lib': '/src/lib',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
    }
  }
});
