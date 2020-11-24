import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

Vue.directive('focus', {
	inserted: function(el) {
		el.focus()
	}
})
