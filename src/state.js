// @ts-check

/** @ignore @typedef { import('./@types/globals.d').StateType} StateType */
/** @ignore @typedef { import('./@types/globals.d').StateUpdateType} StateUpdateType */

const { DEFAULT_STATE } = require('./utils/constants');

/** @type StateType */
let state = { ...DEFAULT_STATE };

/**
 * @module state
 * @name save
 * @desc Saves new data in application's state
 * @param {StateUpdateType} update - State's properties with new values
 */
const save = update => {
  state = {
    ...state,
    ...update,
  };
};

module.exports = { save };
