  module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier",
      "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint", "prettier"],
    parserOptions: {
      project: "./tsconfig.json",
    },
    settings: {
    },
    env: {
      browser: true,
      jasmine: true,
      jest: true,
    },
    overrides: [
      {
        files: ["*.ts"],
        rules: {
          "camelcase": [2, { properties: "never" }],
          "eqeqeq": [2, "smart"],
          "prettier/prettier": "error",
          "arrow-body-style": "off",
          "prefer-arrow-callback": "off",
          "linebreak-style": [
              "error",
              "windows"
          ],
          "quotes": [
              "warn",
              "double"
          ],
          "semi": [
              "error",
              "always"
          ]
        },
      },
    ],
  };
