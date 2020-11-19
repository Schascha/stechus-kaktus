module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/stechus-kaktus/'
		: '/',
	pwa: {
		name: 'Stechus Kaktus – Romanizer',
		themeColor: '#C19A5B',
		manifestOptions: {
			icons: []
		}
	}
}
