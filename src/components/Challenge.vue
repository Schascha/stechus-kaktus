<template>
	<div class="challenge">
		<h2>
			Level {{ id }}:
			<span>{{ label }}</span>
		</h2>

		<p>{{ question }}</p>

		<hr>

		<form @submit.prevent>
			<label for="text">
				{{ $t('field.answer.label') }}
			</label>
			<input
				id="answer"
				v-model="answer"
				v-focus
				type="text"
				name="answer"
				autocomplete="off"
				spellcheck="false"
			>

			<button
				type="button"
				@click="onHelp"
			>
				{{ $t('button.help') }}
			</button>

			<button
				type="submit"
				:disabled="!answer"
				@click="onClick"
			>
				{{ $t('button.okay') }}
			</button>
		</form>

		<span
			v-if="answers.length || failures"
			class="info"
		>
			{{ $t('challenge.answers', {answers: answers.length, failures}) }}
		</span>
		<button
			type="button"
			class="next"
			:disabled="!isNext"
			@click="onNext"
		>
			{{ $t('button.next') }}
			<IconArrow />
		</button>
	</div>
</template>

<script>
import {toRoman} from '@/utils/roman';
import {levels} from '@/utils/levels';
import IconArrow from '@/assets/icons/arrow.svg?inline';

export default {
	name: 'Challenge',
	components: {
		IconArrow
	},
	props: {
		id: {
			type: [Number, String],
			default: 1
		}
	},
	data() {
		return {
			question: null,
			solution: null,
			answer: null,
			answers: [],
			failures: 0
		};
	},
	computed: {
		level() {
			return levels[parseInt(this.id) - 1];
		},
		label() {
			return this.level.label(this.$i18n);
		},
		isNext() {
			return (parseInt(this.id) < levels.length);
		}
	},
	watch: {
		answer(value) {
			this.answer = (value.match(/^[1-9][0-9]*/)) ?
				value.replace(/[^0-9]+/, '').substr(0, 4) :
				value.toUpperCase().replace(/[^MDCLXVI]+/, '').substr(0, 12);
		},
		$route(to) {
			const {id} = to.params;
			this.checkLevel(id);
			this.setQuestion();
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
	methods: {
		checkLevel(id) {
			id = parseInt(id);

			if (id < 1 || id > levels.length) {
				this.$router.replace({name: 'Challenge', params: {id: 1}});
			}
		},
		setQuestion() {
			if (!this.level) {
				return;
			}

			const
				{eq, rule} = this.level,
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

			this.answer = '';
		},
		validate(valid) {
			document.body.classList.add((valid) ? 'valid' : 'invalid');
			document.body.onanimationend = function() {
				document.body.classList.remove((valid) ? 'valid' : 'invalid');
			};
		},
		onClick() {
			if (this.answer.toString() === this.solution) {
				this.answers.push({
					level: this.id,
					question: this.question,
					answer: this.answer
				});
				this.validate(true);
				this.setQuestion();
			} else {
				this.failures++;
				this.validate(false);
			}
		},
		onHelp() {
			this.answer = this.solution;
		},
		onNext() {
			this.$router.push({name: 'Challenge', params: {id: parseInt(this.id) + 1}});
		}
	}
};
</script>
