module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "react-refresh"],
  rules: {
    "react/prop-types": "off",
    "react-refresh/only-export-components": "off",
    "react/no-unescaped-entities": "off",
    "no-unused-vars": "warn",
    "simple-import-sort/imports": "error",
  },
};
