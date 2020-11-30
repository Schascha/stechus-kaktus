import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import i18n from './i18n';

Vue.directive('focus', {
	inserted: function(el) {
		el.focus();
	}
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
