<template>
	<div class="challenge">
		<h2>
			Level {{ id }}:
			<span>{{ label }}</span>
		</h2>

		<p>{{ question }}</p>

		<hr />

		<input
			type="text"
			name="answer"
			autocomplete="off"
			autofocus
			spellcheck="false"
			v-focus
			v-model="answer"
		/>

		<button
			type="button"
			:disabled="!answer"
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
			:disabled="isNext"
			@click="onNext"
		>
			Next level
		</button>
	</div>
</template>

<script>
import {toRoman} from '../utils/roman';
import {levels} from '../utils/levels';

// Alea iacta est

export default {
	name: 'Challenge',
	props: {
		id: {
			type: [Number, String],
			default: 1
		}
	},
	data() {
		return {
			label: null,
			counter: 0,
			question: null,
			solution: null,
			answer: null,
			answers: []
		}
	},
	mounted() {
		document.body.classList.add('dark');
		this.checkLevel(this.id);
		this.setQuestion();
	},
	destroyed() {
		document.body.classList.remove('dark');
	},
	computed: {
		isNext() {
			return (parseInt(this.id) >= levels.length);
		}
	},
	methods: {
		checkLevel(id) {
			id = parseInt(id);

			if (id < 1 || id > levels.length) {
				this.$router.replace({name: 'Challenge', params: {id: 1}})
			}
		},
		setQuestion() {
			const
				{eq, label, rule} = levels[parseInt(this.id) - 1],
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
		onClick() {
			if (this.answer.toString() === this.solution) {
				this.answers.push({
					level: this.id,
					question: this.question,
					answer: this.answer
				});
				window.console.log(this.counter, this.answers);
				this.counter++;
				this.setQuestion();
			}
		},
		onHelp() {
			this.answer = this.solution;
		},
		onNext() {
			this.setQuestion();
			this.$router && this.$router.push({name: 'Challenge', params: {id: parseInt(this.id) + 1}});
		}
	},
	watch: {
		answer(value) {
			this.answer = value.toString().toUpperCase();
		},
		$route(to) {
			const {id} = to.params;
			this.checkLevel(id);
			this.setQuestion();
		}
	}
}
</script>

<style lang="scss">
</style>
