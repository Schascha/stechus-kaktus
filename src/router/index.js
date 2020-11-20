import Vue from 'vue';
import VueRouter from 'vue-router';
import Romanizer from '../components/Romanizer.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Default',
		component: Romanizer
	},
	{
		path: '/:number',
		name: 'Number',
		component: Romanizer,
		props: true
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
