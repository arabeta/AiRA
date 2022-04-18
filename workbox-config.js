module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,css,PNG,png,html,json}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};