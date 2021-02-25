// @ts-check

const readlineSync = require('readline-sync');

/**
 * @module readlineConnector
 * @name inform
 * @desc Outputs a message to the user
 * @param {string} message Data for output
 */
const inform = message => {
  console.log(message);
};

/**
 * @module readlineConnector
 * @name prompt
 * @desc Receives a message from the user
 * @param {string} message Prompt for input
 * @return {string} Input data
 */
const prompt = message => {
  return readlineSync.question(message);
};

module.exports = { inform, prompt };
