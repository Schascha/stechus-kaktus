module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import '@/scss/_variables.scss';
					@import '@/scss/_mixins.scss';
					`
			}
		}
	},

	pluginOptions: {
		i18n: {
			locales: ['en', 'de'],
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	},

	publicPath: process.env.NODE_ENV === 'production' ?
		'/stechus-kaktus/' :
		'/',

	pwa: {
		name: 'Stechus Kaktus – Romanizer',
		short_name: 'Stechus Kaktus',
		themeColor: '#C19A5B',
		manifestOptions: {
			background_color: "#F5EFE1",
			shortcuts: [{
				name: "Challenge mode",
				url: "/challenge"
			}]
		}
	},
}
