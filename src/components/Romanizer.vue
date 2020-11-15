<template>
	<div class="romanizer">
		<input
			type="text"
			name="text"
			autocomplete="off"
			autofocus
			spellcheck="false"
			v-model="text"
			@input="onInput"
		/>
		<p :title="result">
			{{ result }}
		</p>
	</div>
</template>

<script>
import {fromRoman, isRoman, toRoman} from '../utils/roman';
import {Typewriter} from '../utils/typewriter';

const
	year = new Date().getFullYear().toString()
;

export default {
	name: 'Romanizer',
	data() {
		return {
			text: year
		}
	},
	mounted: function () {
		this.typewriter = new Typewriter({
			words: () => {
				const str = parseInt(Math.random() * year).toString();
				return (Math.round(Math.random())) ? toRoman(str) : str;
			},
			onType: (text) => this.text = text,
			onRemove: (text) => this.text = text
		}).typing();
	},
	methods: {
		onInput() {
			this.typewriter.clear();

			if (!this.text.length) {
				window.setTimeout(this.typewriter.typing, 8000);
			}
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
