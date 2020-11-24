module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ?
		'/stechus-kaktus/' :
		'/',

	pwa: {
		name: 'Stechus Kaktus – Romanizer',
		themeColor: '#C19A5B'
	},

	pluginOptions: {
		i18n: {
			locales: ['en', 'de'],
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	}
}
