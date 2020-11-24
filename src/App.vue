<template>
	<div class="frame">
		<header>
			<h1>Stechus Kaktus – Romanizer</h1>
			<a
				:href="$t('link.wikipedia.href')"
				:title="$t('link.wikipedia.title')"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconWikipedia />
			</a>
		</header>

		<main>
			<router-view/>
		</main>

		<footer>
			<a
				:href="$t('link.github.href')"
				:title="$t('link.github.title')"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconGitHub />
			</a>
			<Language />
			<router-link v-if="$route.name === 'Challenge'" :to="{name: 'Default'}">Romanizer</router-link>
			<router-link v-else :to="{name: 'Challenge'}">{{ $t('router.challenge') }}</router-link>
		</footer>
	</div>
</template>

<script>
	import IconGitHub from '@/assets/icons/github.svg?inline';
	import IconWikipedia from '@/assets/icons/wikipedia.svg?inline';
	import Language from '@/components/Language';

	export default {
		name: 'App',
		components: {
			IconGitHub,
			IconWikipedia,
			Language
		}
	}
</script>

<style lang="scss">
	@import 'styles';
</style>
