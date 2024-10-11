import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgx from "@svgx/vite-plugin-react";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [
    react(),
    svgx(),
    svgLoader()
  ],
  server: {
    host: true
  }
})