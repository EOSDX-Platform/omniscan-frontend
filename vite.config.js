import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/omniscan-frontend/' : '/',
	root: 'src',
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.startsWith('sp-')
				}
			}
		}),
		vueDevTools()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		outDir: '../dist',
		emptyOutDir: true
	}
})