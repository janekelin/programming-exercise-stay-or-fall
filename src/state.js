// @ts-check

/** @ignore @typedef { import('./@types/globals.d').StateType} StateType */
/** @ignore @typedef { import('./@types/globals.d').StateUpdateType} StateUpdateType */

const { DEFAULT_STATE } = require('./utils/constants');
const { move, Point } = require('./components/Point');

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

/**
 * @module state
 * @name isGameOver
 * @desc Determines whether the object has fallen from the table
 * @returns {boolean} Whether the object has fallen from the table
 */
const isGameOver = () => {
  const outsideOfWidth =
    state.endPosition.x > state.tableSize.width || state.endPosition.x < 0;
  const outsideOfHeight =
    state.endPosition.y > state.tableSize.height || state.endPosition.y < 0;
  return outsideOfWidth || outsideOfHeight;
};

const changeFacingDirection = {
  clockwiseFrom: {
    whenFacingNorth: 'whenFacingEast',
    whenFacingEast: 'whenFacingSouth',
    whenFacingSouth: 'whenFacingWest',
    whenFacingWest: 'whenFacingNorth',
  },
  counterclockwiseFrom: {
    whenFacingNorth: 'whenFacingWest',
    whenFacingEast: 'whenFacingNorth',
    whenFacingSouth: 'whenFacingEast',
    whenFacingWest: 'whenFacingSouth',
  },
};

const getResult = () => {
  // @ts-ignore
  state.commands.forEach(command => {
    if (isGameOver()) {
      // @ts-ignore
      state.endPosition = Point(-1, -1);
    } else {
      switch (command) {
        case 1:
          // @ts-ignore
          state.endPosition = move(state.endPosition).forward[state.facing];
          break;
        case 2:
          // @ts-ignore
          state.endPosition = move(state.endPosition).backwards[state.facing];
          break;
        case 3:
          // @ts-ignore
          state.facing = changeFacingDirection.clockwiseFrom[state.facing];
          break;
        case 4:
          state.facing =
            // @ts-ignore
            changeFacingDirection.counterclockwiseFrom[state.facing];
          break;
        case 0:
        default:
          break;
      }
    }
  });
  return state.endPosition;
};

module.exports = { save, getResult, isGameOver };
