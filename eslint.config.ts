import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

import eslintConfigPrettier from "eslint-config-prettier/flat"

import eo from "eslint-eo-plugin"
import { rules } from "./config/eslint/rules"

const APPLICABLE_FILES = "./src/**/*.ts"

export default tseslint.config({
  files: [APPLICABLE_FILES],
  plugins: {
    js,
    [eo.meta.name]: eo,
  },
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    eo.configs.recommended,
  ],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules,
})
