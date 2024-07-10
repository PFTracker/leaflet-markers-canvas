import { uglify } from "rollup-plugin-uglify";

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
      plugins: [uglify()],
    },
  ],
  plugins: [],
  external: ["rbush", "leaflet"],
};
