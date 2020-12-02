module.exports = {
	root: true,
	env: {
		node: true,
		jest: true
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	parserOptions: {
		parser: 'babel-eslint'
	}
}
