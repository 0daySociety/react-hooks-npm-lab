module.exports = {
    env: { browser: true, es6: true, node: true, commonjs: true, jest: true },
    extends: [
        'plugin:vue/essential',
        'plugin:react/recommended',
        'airbnb-base',
        'prettier',
    ],
    globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    plugins: ['react', 'vue', '@typescript-eslint'],
    rules: {},
    parser: '@typescript-eslint/parser',
};
