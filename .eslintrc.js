module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            typescript: {},
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'import/extensions': [2, 'ignorePackages', { ts: 'never', tsx: 'never', json: 'never', js: 'never' }],
        '@typescript-eslint/no-useless-constructor': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    },
}
