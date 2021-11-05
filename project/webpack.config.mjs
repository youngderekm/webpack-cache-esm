
import path from 'path';

// assume we need require.resolve somewhere in the configuration
import {createRequire} from "module";
const require = createRequire(import.meta.url);

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import localConfig from 'config';

console.log(localConfig);

export default {
  //  entry: './src/index.js',
  ...localConfig,

  infrastructureLogging: {
    debug: /webpack\.cache/
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // cache: {
  //   type: 'filesystem',
  // },

};
