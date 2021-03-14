module.exports = {
    transform: {
        '^.+\.svelte$': ["svelte-jester", { "preprocess": true }],
        '^.+\.js$': "babel-jest",
        '^.+\.ts$': "ts-jest",
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "mjs",
        "svelte",
    ],
    // Fixes the TypeError: regexparam is not a function
    // moduleNameMapper: {
    //     "^regexparam$": "<rootDir>/node_modules/regexparam/dist/regexparam.mjs"
    // },
    transformIgnorePatterns: [
        'node_modules/(?!(.*(svelte-spa-router|regexparam))/)',
    ],
};