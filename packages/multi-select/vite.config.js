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
      name: 'VMultiSelect',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        '@gits-id/tooltip',
        '@gits-id/icon',
        '@gits-id/forms',
        '@gits-id/badge',
        '@vueuse/core',
        'vee-validate',
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
