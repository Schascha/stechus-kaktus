import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const
	routes = [
		{
			path: '/',
			name: 'Default',
			component: () => import(/* webpackChunkName: "Romanizer" */ '@/components/Romanizer')
		},
		{
			path: '/challenge/:id?',
			name: 'Challenge',
			component: () => import(/* webpackChunkName: "Challenge" */ '@/components/Challenge'),
			props: true
		},
		{
			path: '/:number',
			name: 'Number',
			component: () => import(/* webpackChunkName: "Romanizer" */ '@/components/Romanizer'),
			props: true
		}
	],
	router = new VueRouter({
		mode: 'hash',
		base: process.env.BASE_URL,
		routes
	})
;

export default router;
