module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [{
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    extends: 'love'
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    indent: ["error", 4, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unescaped-entities": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};