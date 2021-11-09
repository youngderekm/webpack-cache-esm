
import path from 'path';

import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// assume we need require.resolve somewhere in the configuration
import {createRequire} from "module";
const require = createRequire(import.meta.url);

export default {
  mode: "development",

  infrastructureLogging: {
    debug: /webpack\.cache/
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // comment out this section and build should run with no errors or warnings.
  cache: {
    type: 'filesystem',
  },
};
