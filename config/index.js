
import {createRequire} from 'module';
const require = createRequire(import.meta.url);

import { logger } from './logger.js';

logger("in index.js");

export default {
  entry: './src/index.js',
}
