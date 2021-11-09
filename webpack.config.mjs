
import path from 'path';

import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// assume we need require.resolve somewhere in the configuration
import {createRequire} from "module";
const require = createRequire(import.meta.url);

export default {
  infrastructureLogging: {
    debug: /webpack\.cache/
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  cache: {
    type: 'filesystem',
  },
};
