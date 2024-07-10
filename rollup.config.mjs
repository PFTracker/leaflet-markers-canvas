import terser from '@rollup/plugin-terser';

export default {
  input: "src/leaflet-markers-canvas.js",
  output: [
    {
      file: "dist/leaflet-markers-canvas.js",
      format: "umd",
    },
    {
      file: "dist/leaflet-markers-canvas.min.js",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [],
  external: ["rbush", "leaflet"],
};
