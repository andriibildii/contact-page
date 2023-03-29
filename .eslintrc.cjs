module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier", "@typescript-eslint"],
	rules: {
		"react/jsx-filename-extension": [
			1,
			{ extensions: [".js", ".jsx", ".ts", ".tsx"] },
		],
		"react/react-in-jsx-scope": "off",
		// "react/prop-types": "off",
		// "react/no-children-prop": "off",
		// "react/display-name": "off",
		"no-require-imports": off
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
