module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: [
				'**/*.{js,ts,vue}',
				'**/layouts/**/*.{js,ts,vue}',
				'**/app.{js,ts,vue}',
				'**/error.{js,ts,vue}',
			],
			rules: {
				'vue/multi-word-component-names': 'off',
				'vue/component-name-in-template-casing': 'off',
				'vue/singleline-html-element-content-newline': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'no-console': 'off',
				'brace-style': 'off',
				'operator-linebreak': 'off',
				'vue/operator-linebreak': 'off',
				'require-await': 'off',
				'vue/html-indent': 'off',
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-duplicates': 'off',
			},
		},
		{
			files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
			rules: {
				'no-unused-expressions': 'off',
			},
		},
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'no-undef': 'off',
			},
		},
		{
			files: ['*.ts'],
			rules: {},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'vue'],
	rules: {},
};
