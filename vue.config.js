module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData:  `
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
		themeColor: '#C19A5B'
	},
}
