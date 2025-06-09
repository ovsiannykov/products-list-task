const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const typescriptEslintParser = require('@typescript-eslint/parser')
const prettierPlugin = require('eslint-plugin-prettier')
const importPlugin = require('eslint-plugin-import')

module.exports = [
  {
    ignores: ['node_modules', 'ios', 'android', 'build'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unstable-nested-components': 'off',
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': 'off',
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'react-native/no-inline-styles': 'off',
      'comma-dangle': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'import/no-internal-modules': [
        'error',
        {
          allow: [
            '**/react-native-screens/**',
            '**/assets/**',
            '**/zustand/**',
            '**@hookform/resolvers/**',
            '**react-native-image-picker/**',
          ],
        },
      ],
      'no-debugger': 'warn',
      'newline-before-return': 'warn',
      curly: 'warn',
      semi: 'off',
      'react/display-name': 'off',
      'no-console': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern:
                '@{app,shared,screens,navigation,widgets,entities,features}/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]
