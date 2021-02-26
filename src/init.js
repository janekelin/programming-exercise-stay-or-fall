// @ts-check

const interfaceBuilder = require('./builders/interfaceBuilder');
const { guard } = require('./factories/guardFactory');
const MESSAGES = require('./utils/constants');
const state = require('./state');
const {
  parseTableSize,
  parseStartPosition,
  parseCommands,
} = require('./utils/parsers');

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
    tableSize: parseTableSize(tableSize),
    startPosition: parseStartPosition(startPosition),
    commands: parseCommands(commands),
    endPosition: parseStartPosition(startPosition),
  });

  appInterface.inform(MESSAGES.RESULT);
  const result = state.getResult();
  if (state.isGameOver()) {
    appInterface.inform(MESSAGES.LOST);
  } else {
    appInterface.inform(MESSAGES.WON);
    appInterface.inform(`[${result.x},${result.y}]`);
  }
}

module.exports = init;
