<template>
	<div class="romanizer">
		<input
			type="text"
			name="text"
			autocomplete="off"
			v-model="text"
			@input="text = text.toUpperCase().replace(/[^MDCLXVI0-9]+/, '')"
		/>
		<p :title="result">{{ result }}</p>
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
			// text: 'MDCCCCLXXXIIII'
			// text: 'MCMLXXXIV'
			text: year
		}
	},
	computed: {
		result() {
			return (isRoman(this.text)) ? toRoman(this.text) : fromRoman(this.text);
		}
	}
}
</script>

<style lang="scss">
</style>
