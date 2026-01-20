import js from "@eslint/js";
import vue from "eslint-plugin-vue";

export default [
  js.configs.recommended,

  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.js", "**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "warn",
    },
  },
];
