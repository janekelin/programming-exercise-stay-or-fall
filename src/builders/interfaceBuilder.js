// @ts-check

/** @ignore @typedef { import('../@types/globals.d').InterfaceType} InterfaceType */
/** @ignore @typedef { import('../@types/globals.d').InterfaceProvidersType} InterfaceProvidersType */

const readlineSync = require('readline-sync');

function readlineConnector() {
  return {
    inform: str => {
      console.log(str);
    },
    prompt: str => {
      readlineSync.question(str);
    },
  };
}

/** @type InterfaceProvidersType */
const interfaceProviders = {
  readline: readlineConnector(),
};

/**
 * @module interfaceBuilder
 * @desc Creates application's interface
 * @param {string} provider - Name of utility providing application's interface
 * @returns {InterfaceType} Object with interface functionality.
 * @throws If the interface is to be built from an unsupported provider
 */
function interfaceBuilder(provider) {
  if (!Object.prototype.hasOwnProperty.call(interfaceProviders, provider)) {
    throw new Error(
      `The application has failed to load. Interface provider is not supported.`
    );
  }
  return interfaceProviders[provider];
}

module.exports = { from: interfaceBuilder };
