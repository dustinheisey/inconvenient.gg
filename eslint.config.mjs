// ? https://allalmohamedlamine.medium.com/flat-config-setting-up-eslint-and-prettier-with-eslint-prettier-plugin-7bd1ca453129

import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    files: ['**/*.{mjs,cjs,js}'],
    languageOptions: {
      globals: {
        ...globals.es2021
      }
      // ecmascriptVersion, and sourceType, default is right
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      // 'import/no-cycle': 'warn',
      'class-methods-use-this': 'off',
      // 'import/prefer-default-export': 'off',
      'comma-dangle': 'off',
      'object-curly-newline': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': 'off',
      'import/no-absolute-path': 'off',
      'generator-star-spacing': 'off',
      'no-prototype-builtins': 'off',
      'no-underscore-dangle': 'off',
      'no-plusplus': 'off',
      'no-undef': 'warn',
      'no-case-declarations': 'warn',
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules
    },
    ignores: [
      'site/_site/**/*.js',
      '!.storybook',
      'common/index.min.js',
      'wiki/build/**/*.js',
      'wiki/.docusaurus/**.js',
      'wiki/babel.config.js'
    ]
  }
]
