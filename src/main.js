import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'

Vue.directive('focus', {
	inserted: function(el) {
		el.focus()
	}
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
