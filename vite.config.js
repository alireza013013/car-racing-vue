import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), glsl()],
})
