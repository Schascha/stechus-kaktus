import Vue from 'vue';

export default Vue.directive('focus', {
	inserted: function(el) {
		el.focus();
	}
});
