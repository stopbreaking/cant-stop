import {dirname} from 'node:path'
import { fileURLToPath } from 'node:url'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    base: "./"
})