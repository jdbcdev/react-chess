import * as R from 'ramda'
import convertTileToAxis from './convertTileToAxis'

/**
 * Insert into axis list that after converted tiles
 * @param  {Array} initial
 * @param  {Array} tiles
 * @return {Array}
 */
function insertAxis (initial, tiles) {
  const [axis] = initial

  if (!Array.isArray(axis)) {
    initial = []
  }

  return tiles.reduce((acc, tile) => {
    const { x, y } = convertTileToAxis(tile)

    return [...acc, [x, y]]
  }, initial)
}

export default R.curry(insertAxis)
