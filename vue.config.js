const
	app = {
		name: 'Stechus Kaktus – Romanizer',
		meta: {
			description: 'Just a simple roman numerals converter',
			url: 'https://schascha.github.io/stechus-kaktus/'
		}
	}
;

module.exports = {
	chainWebpack: (config) => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = app.name;
				args[0].meta = app.meta;
				return args;
			});
	},

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
		name: app.name,
		themeColor: '#C19A5B',
		manifestOptions: {
			background_color: '#F5EFE1',
			short_name: 'Stechus Kaktus',
			shortcuts: [{
				name: 'Challenge mode',
				url: './#/challenge'
			}]
		},
		workboxOptions: {
			exclude: [
				/\.map$/,
				/manifest\.json$/
			],
			runtimeCaching: [
				{
					urlPattern: 'https://fonts.googleapis.com/.*',
					handler: 'cacheFirst',
					method: 'GET'
				}
			]
		}
	}
};
