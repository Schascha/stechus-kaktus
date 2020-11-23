import Vue from 'vue';
import VueRouter from 'vue-router';
import Romanizer from '../components/Romanizer.vue';
import Challenge from '../components/Challenge.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Default',
		component: Romanizer
	},
	{
		path: '/challenge/:id?',
		name: 'Challenge',
		component: Challenge,
		props: true
	},
	{
		path: '/:number',
		name: 'Number',
		component: Romanizer,
		props: true
	}
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
