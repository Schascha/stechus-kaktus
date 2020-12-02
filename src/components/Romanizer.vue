<template>
  <div class="romanizer">
    <input
      v-model="text"
      v-focus
      type="text"
      name="text"
      autocomplete="off"
      autofocus
      spellcheck="false"
      @input="onInput"
    >

    <hr>

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
	props: {
		number: {
			type: [Number, String],
			default: null
		}
	},
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
			this.text = this.validate(value);
		},
		$route(to) {
			const {number} = to.params;

			if (number) {
				this.text = this.validate(number);
			}
		}
	},
	mounted() {
		document.body.classList.add('light');

		this.typewriter = new Typewriter({
			words: () => {
				const str = parseInt(Math.random() * year).toString();
				return (Math.round(Math.random())) ? toRoman(str) : str;
			},
			onType: (text) => this.text = text,
			onRemove: (text) => this.text = text,
			// onChange: this.onChange
		});

		if (this.number) {
			this.update(this.number);
		} else {
			this.typewriter.typing();
		}
	},
	destroyed () {
		document.body.classList.remove('light');
		this.typewriter.clear();
	},
	methods: {
		update(value) {
			this.text = this.validate(value);
			(value !== this.text) && this.onChange();

			if (!this.text) {
				this.text = this.$data.text;
				this.typewriter.typing();
			}
		},
		validate(value) {
			return (value.match(/^[1-9][0-9]*/)) ?
				value.replace(/[^0-9]+/, '').substr(0, 4) :
				value.toUpperCase().replace(/[^MDCLXVI]+/, '').substr(0, 12);
		},
		onChange() {
			this.text = this.validate(this.text);
			this.$router && this.$router.push(this.text || '/').catch(()=>{});
		},
		onInput() {
			this.typewriter.clear();
			this.onChange();

			if (!this.text.length) {
				this.typewriter.typing(8000);
			}
		},
	}
}
</script>
