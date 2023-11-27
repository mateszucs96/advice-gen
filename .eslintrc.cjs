module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		indent: ['error', 'tab'],
		'react/react-in-jsx-scope': 'off',
		'linebreak-style': ['error', 'windows'],
		'no-mixed-spaces-and-tabs': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
