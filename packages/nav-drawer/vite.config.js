import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    exclude: ['./src/**/**.stories.ts'],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VNavDrawer',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        '@gits-id/menu',
        '@gits-id/logo',
        '@gits-id/utils',
        '@gits-id/navbar',
        '@gits-id/button',
        '@gits-id/icon',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
      resolve: {
        dedupe: 'vue',
      },
    },
  },
});
