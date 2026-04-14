import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          "patterns": [
            {
              "group": ["@radix-ui/*", "radix-ui"],
              "message": "Use @workspace/ui components only."
            },
            {
              "group": ["@tabler/icons-react", "@tabler/icons-react/*"],
              "message": "Import icons from @workspace/ui/components/icon instead."
            },
            {
              "group": ["@/components/*", "../components/*", "./components/*"],
              "message": "Local components in apps are forbidden. Add them to @workspace/ui instead."
            }
          ]
        }
      ],
      "no-restricted-syntax": [
        "error",
        {
          "selector": "JSXAttribute[name.name='style']",
          "message": "Inline styles are forbidden. Use Tailwind classes from the design system."
        }
      ]
    }
  },
])
