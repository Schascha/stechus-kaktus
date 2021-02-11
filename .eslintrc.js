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
		parser: "babel-eslint"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		'object-curly-spacing': ['error', 'never'],
		'semi': 'error',
		'semi-spacing': 'error',
		"vue/html-indent": ["error", "tab"]
	}
};
