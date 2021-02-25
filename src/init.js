// @ts-check

const interfaceBuilder = require('./builders/interfaceBuilder');
const { guard } = require('./factories/guardFactory');
const MESSAGES = require('./utils/constants');
const state = require('./state');

/**
 * @module init
 * @name init
 * @desc Controls application's flow.
 */
function init() {
  const appInterface = interfaceBuilder.from('readline');

  appInterface.inform(MESSAGES.WELCOME);

  const tableSize = appInterface.prompt(
    MESSAGES.PROMPT_TABLE_SIZE,
    guard('tableSize')
  );
  const startPosition = appInterface.prompt(
    MESSAGES.PROMPT_START_POSITION,
    guard('startPosition')
  );
  const commands = appInterface.prompt(
    MESSAGES.PROMPT_COMMANDS,
    guard('commands')
  );

  state.save({
    tableSize,
    startPosition,
    commands,
  });

  appInterface.inform(MESSAGES.RESULT);
}

module.exports = init;
