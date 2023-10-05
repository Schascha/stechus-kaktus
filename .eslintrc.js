module.exports = {
	root: true,
	env: {
		node: true,
		jest: true
	},
	extends: [
		'plugin:vue/recommended',
		'@schascha/eslint-config'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/html-indent': ['error', 'tab']
	}
};
