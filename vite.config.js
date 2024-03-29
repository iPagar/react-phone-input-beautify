import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib.ts',
      fileName: 'lib',
      formats: ['es', 'cjs'],
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ['stories'],
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin(),
  ],
});
