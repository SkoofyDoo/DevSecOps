module.exports = [
    {
        ignores: ['node_modules/**'],
    },

    // Основной код (не тесты)
    {
        files: ['**/*.js'],
        ignores: ['**/__tests__/**'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
        },
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
        },
    },

    // Тесты Jest
    {
        files: ['**/__tests__/**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            globals: {
                test: 'readonly',
                expect: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
        },
    },
];
