// @ts-check

const interfaceBuilder = require('./builders/interfaceBuilder');

/**
 * @module init
 * @name init
 * @desc Controls application's flow.
 */
function init() {
  const appInterface = interfaceBuilder.from('readline');
  appInterface.inform('welcome');
  appInterface.prompt('tableSize');
  appInterface.prompt('startPosition');
  appInterface.prompt('commands');
  appInterface.inform('result');
}

module.exports = init;
