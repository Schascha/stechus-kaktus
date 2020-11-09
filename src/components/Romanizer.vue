<template>
	<div class="romanizer">
		<input
			type="text"
			name="text"
			autocomplete="off"
			autofocus
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

const
	year = new Date().getFullYear().toString()
;

export default {
	name: 'Roman',
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
			const delta = Math.random() * 100;

			if (this.word && this.word.length) {
				this.text += this.word.shift();
				this.timer = window.setTimeout(this.typing, 300 - delta);
			} else {
				this.timer = window.setTimeout(this.remove, 2000 - delta);
			}
		},
		remove() {
			if (this.text.length) {
				this.text = this.text.slice(0, -1);
				this.timer = window.setTimeout(this.remove, 50);
			} else {
				this.word = parseInt(Math.random() * year).toString().split('');
				this.timer = window.setTimeout(this.typing, 50);
			}
		},
		onInput() {
			window.clearTimeout(this.timer);
			// this.timer = window.setTimeout(this.typing, 8000);
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
