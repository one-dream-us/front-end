import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // https://vite.dev/config/
  return defineConfig({
    plugins: [
      react(),
      partytownVite({ dest: path.resolve(__dirname, 'public/~partytown'), debug: true }),
    ],
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
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.indexOf('node_modules') !== -1) {
              const module = id.split('node_modules/').pop()?.split('/')[0];
              return `vendor-${module}`;
            }
          },
        },
      },
    },
  });
};
