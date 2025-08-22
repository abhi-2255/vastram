import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust paths for your project
  ],
  theme:{
    extend:{
      fontFamily:{
        prata:["Prata", "serif"]
      }
    }
  },
  plugins: [react(), tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    })
  ],
  
})
