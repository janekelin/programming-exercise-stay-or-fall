// @ts-check

/** @ignore @typedef { import('../@types/globals.d').PointType} PointType */

/**
 * @module Point
 * @desc Generates a Point object
 * @param {number} x - Coordinate on horizontal axis
 * @param {number} y - Coordinate on vertical axis
 * @returns {PointType} A point in the coordinate system
 */
exports.Point = (x, y) => {
  return {
    x,
    y,
  };
};
