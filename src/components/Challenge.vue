<template>
	<div class="challenge">
		<h2>Level {{ level + 1 }}</h2>
		<p>
			{{ question }}
		</p>
		<input
			type="text"
			name="answer"
			autocomplete="off"
			autofocus
			spellcheck="false"
			v-model="answer"
		/>

		<button
			type="button"
			@click="onClick"
		>
			Accept
		</button>

		<button
			type="button"
			@click="onHelp"
		>
			Help
		</button>

		<button
			type="button"
			:disabled="showNext()"
			@click="onNext"
		>
			Next
		</button>
	</div>
</template>

<script>
import {toRoman} from '../utils/roman';

// Alea iacta est

function randomInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const
	level = [
		{
			rule: () => randomInterval(1, 10)
		},
		{
			rule: () => randomInterval(11, 100)
		},
		{
			rule: () => randomInterval(101, 1000)
		},
		{
			rule: () => randomInterval(1001, 5000)
		},
		{
			rule: () => {
				const
					x = randomInterval(1, 100),
					y = randomInterval(1, 100),
					z = x + y
				;

				return {x, y, z};
			},
			eq: (x, y) => `${x} + ${y}`
		},
		{
			rule: () => {
				const
					// arr = [...Array(2)].map(() => randomInterval(50, 250)).sort((a, b) => b - a),
					x = randomInterval(100, 200),
					y = randomInterval(50, 99),
					z = x - y
				;

				return {x, y, z};
			},
			eq: (x, y) => `${x} - ${y}`
		},
		{
			rule: () => {
				const
					// arr = [...Array(2)].map(() => randomInterval(50, 250)).sort((a, b) => b - a),
					x = randomInterval(2, 10),
					y = randomInterval(2, 10),
					z = x * y
				;

				return {x, y, z};
			},
			eq: (x, y) => `${x} * ${y}`
		}
	]
;

export default {
	name: 'Challenge',
	data() {
		return {
			counter: 0,
			level: 0,
			question: null,
			solution: null,
			answer: null,
			answers: []
		}
	},
	mounted: function () {
		this.setQuestion();
	},
	methods: {
		setQuestion() {
			const
				{rule, eq} = level[this.level],
				r = rule(),
				isRoman = Math.round(Math.random())
			;

			if (isRoman) {
				this.question = (eq) ? eq(toRoman(r.x), toRoman(r.y)) : toRoman(r);
				this.solution = (r.z || r).toString();
			} else {
				this.question = (eq) ? eq(r.x, r.y) : r;
				this.solution = toRoman(r.z || r);
			}

			this.answer = '';
			window.console.log(this.question, this.solution);
		},
		showNext() {
			return (this.level >= level.length - 1);
		},
		onClick() {
			if (this.answer.toString() === this.solution) {
				this.answers.push({
					level: this.level,
					question: this.question,
					answer: this.answer
				});
				this.counter++;
				this.setQuestion();
				window.console.log(this.answers);
			}
		},
		onHelp() {
			this.answer = this.solution;
		},
		onNext() {
			this.level++;
			this.setQuestion();
		}
	},
	watch: {
		answer(value) {
			this.answer = value.toString().toUpperCase();
		}
	}
}
</script>

<style lang="scss">
</style>
