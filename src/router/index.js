import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: () => import('../views/login.vue')  },
		// catch-all 404
		{ path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/login.vue') }
	],
	scrollBehavior: () => ({ top: 0 })
})

export default router