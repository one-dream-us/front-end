import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // https://vite.dev/config/
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/backend': {
          target: env.VITE_BACKEND_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/backend/, ''),
          ws: true,
        },
      },
    },
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  });
};
