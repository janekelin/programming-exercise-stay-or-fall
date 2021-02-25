// @ts-check

import interfaceBuilder from './builders/interfaceBuilder';

function init() {
  const appInterface = interfaceBuilder.from('readline');
  appInterface.inform('welcome');
  appInterface.prompt('tableSize');
  appInterface.prompt('startPosition');
  appInterface.prompt('commands');
  appInterface.inform('result');
}

export default init;
