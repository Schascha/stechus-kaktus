<template>
	<div class="challenge">
		<h2>
			Level {{ level + 1 }}:
			<span>{{ label }}</span>
		</h2>

		<p>{{ question }}</p>

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
import {level} from '../utils/level';

// Alea iacta est

export default {
	name: 'Challenge',
	data() {
		return {
			label: null,
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
				{eq, label, rule} = level[this.level],
				r = rule(),
				isRoman = Math.round(Math.random())
			;

			if (eq) {
				this.question = eq(toRoman(r.x), toRoman(r.y));
				this.solution = toRoman(r.z);
			} else {
				this.question = (isRoman) ? toRoman(r) : r;
				this.solution = (isRoman) ? r.toString() : toRoman(r);
			}

			this.label = label;
			this.answer = '';
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
