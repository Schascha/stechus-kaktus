<template>
	<div class="romanizer">
		<input
			type="text"
			name="text"
			autocomplete="off"
			autofocus
			v-model="text"
		/>
		<p :title="result">
			{{ result }}
		</p>
	</div>
</template>

<script>
import {fromRoman, isRoman, toRoman} from '../utils/roman';

const
	year = new Date().getFullYear().toString()
;

export default {
	name: 'Roman',
	data() {
		return {
			text: year
		}
	},
	computed: {
		result() {
			return (isRoman(this.text)) ? fromRoman(this.text) : toRoman(this.text);
		}
	},
	watch: {
		text(value) {
			this.text = value.toUpperCase()
				.replace(/[^MDCLXVI0-9]+/, '')
				.substr(0, (this.text.match(/[0-9]{1,4}/)) ? 4 : 12);
		}
	}
}
</script>

<style lang="scss">
</style>
