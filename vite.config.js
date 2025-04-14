import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: {
    sm:"480px",
    md:"768px",
    lg:"976px",
    xl:"1440px",
  },
  extend :{
   colors:{
    brightRed: 'hsl(12 ,88%,59%)',
    brightRedLight:'hsl(12,88%,69%)',
    brightRedSupLight:'hsl(12,88%,95%)',
    darkBlue:'hsl(228,39%,23%)',
    darkGrayishBlue:'hsl(227,12%,61%)',
    veryDarkBlue:'hsl(223,12%,13%)',
    veryPaleRed:'hsl(13,100%,96%)',
    veryLightGray:'hsl(0,0%,98%)'

    
   }
  }
   

  
})
