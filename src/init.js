// @ts-check

const interfaceBuilder = require('./builders/interfaceBuilder');
const MESSAGES = require('./utils/constants');

/**
 * @module init
 * @name init
 * @desc Controls application's flow.
 */
function init() {
  const appInterface = interfaceBuilder.from('readline');
  appInterface.inform(MESSAGES.WELCOME);
  appInterface.prompt(MESSAGES.PROMPT_TABLE_SIZE);
  appInterface.prompt(MESSAGES.PROMPT_START_POSITION);
  appInterface.prompt(MESSAGES.PROMPT_COMMANDS);
  appInterface.inform(MESSAGES.RESULT);
}

module.exports = init;
