// @ts-check

/** @ignore @typedef { import('../@types/globals.d').ValidationsType} ValidationsType */
/** @ignore @typedef { import('../@types/globals.d').ValidationOptionType} ValidationOptionType */

/** @type ValidationsType */
const validations = {
  tableSize: {
    limit: /^(\d+),(\d+)$/,
    limitMessage: `
    The provided table size does not have a valid format. Please try again.
    `,
  },
  startPosition: {
    limit: /^(\d+),(\d+)$/,
    limitMessage: `
    The provided table start position does not have a valid format. Please try again.
    `,
  },
  commands: {
    limit: /(^(\d+)(,(\d+))*(,0)$)|0/,
    limitMessage: `
    The provided command list does not have a valid format. Please try again.
    `,
  },
};

/**
 * @module guardFactory
 * @name guard
 * @desc Provides validations for supported guards of inputs
 * @param {string} guardType Identifier of a guard to use
 * @returns {ValidationOptionType} Validation of a supported type
 * @throws If there is no validation for the requested input
 */
const guardFactory = guardType => {
  if (!Object.prototype.hasOwnProperty.call(validations, guardType)) {
    throw new Error(
      `The application encountered an error. A non-supported validation for ${guardType} has been called.`
    );
  }
  return validations[guardType];
};

module.exports = { guard: guardFactory };
