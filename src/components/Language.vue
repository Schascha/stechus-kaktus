<template>
	<div class="language">
		<select v-model="$i18n.locale">
			<option
				v-for="(lang, i) in langs"
				:key="`Lang${i}`"
				:value="lang"
			>
				{{ lang }}
			</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'Language',
		data() {
			return {
				langs: ['en', 'de']
			};
		},
		mounted() {
			this.$watch('$i18n.locale', (newLocale, oldLocale) => {
				if (newLocale !== oldLocale) {
					document.documentElement.lang = newLocale;
				}
			}, {immediate: true});
		}
	};
</script>

<style lang="scss">
	@import '@/scss/components/_language';
</style>
