import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
      outDir: "docs",
      rollupOptions: {
        optput: {
          manualChunks: (id) => {
            if (id.indexOf("node_modules") !== -1) {
              const module = id.split("node_modules/").optput
              ().split("/")[0];
              return `vendor-${module}`
            }
          },
        },
      },
    },
})
