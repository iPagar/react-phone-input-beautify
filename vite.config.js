import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib.ts', // Путь к входному файлу вашей библиотеки
      formats: ['es'],
    },
    outDir: 'lib',
  },
  plugins: [react()],
});
