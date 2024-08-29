import terser from "@rollup/plugin-terser";

export default {
  input: "scripts/index.js",
  output: {
    file: "scripts/index.min.js",
    format: "iife",
  },
  plugins: [terser()],
};
