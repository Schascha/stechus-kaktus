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
			text: year,
			word: null,
			timer: null
		}
	},
	mounted: function () {
		this.typing();
	},
	methods: {
		typing() {
			if (this.word && this.word.length) {
				this.text += this.word.shift();
				this.timer = window.setTimeout(this.typing, 300 - Math.random() * 100);
			} else {
				this.timer = window.setTimeout(this.remove, 2000);
			}
		},
		remove() {
			if (this.text.length) {
				this.text = this.text.slice(0, -1);
				this.timer = window.setTimeout(this.remove, 50);
			} else {
				this.word = this.randomWord().split('');
				this.timer = window.setTimeout(this.typing, 300 - Math.random() * 100);
			}
		},
		randomWord() {
			const str = parseInt(Math.random() * year).toString();
			return (Math.round(Math.random())) ? toRoman(str) : str;
		},
		onInput() {
			window.clearTimeout(this.timer);

			if (!this.text.length) {
				this.timer = window.setTimeout(this.typing, 8000);
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
