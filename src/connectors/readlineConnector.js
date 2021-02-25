// @ts-check

/** @ignore @typedef { import('../@types/globals.d').ValidationOptionType} ValidationOptionType */

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
 * @param {ValidationOptionType} validation Customization of input's validation
 * @return {string} Input data
 */
const prompt = (message, validation) => {
  return readlineSync.question(message, validation);
};

module.exports = { inform, prompt };
