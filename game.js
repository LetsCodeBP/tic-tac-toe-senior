'use strict'

export let config = {
  X_TOKEN: 'X',
  O_TOKEN: 'O',
  EMPTY_TOKEN: '.',
  GAME_SIZE: 3
}

const range = (length) => Array.from({length}, (e, i) => i)

export function generateEmptyGame() {
  const _ = config.EMPTY_TOKEN
  const SIZE = config.GAME_SIZE
  const matrix = range(SIZE).map(() => range(SIZE).fill(_))
  return {matrix, turn: 0}
}

export function reduceTurn(previousState, {position}) {
  const X = config.X_TOKEN
  const O = config.O_TOKEN
  const token = previousState.turn % 2 == 0 ? X : O
  const updateIfNotEmptyOnPosition = (cell, coords) => {
    return isPositionSame(position, coords) ? token : cell
  }
  const matrix = matrixMap(previousState.matrix, updateIfPositionIsSame)
  return {
    matrix,
    turn: previousState.turn + 1
  }
}

function isPositionSame(pos1, pos2) {
  return pos1.every((e, i) => e === pos2[i])
}

function matrixMap(matrix, iterator) {
  return matrix.map((row, j) =>
    row.map((cell, i) => iterator(matrix[j][i], [i, j]))
  )
}

function immutableSetMatrixElement(matrix, coords, element) {
  const placeElementOnCoords = 
    (cell, indexes) => isPositionSame(indexes, coords) ? element : cell
  return matrixMap(matrix, placeElementOnCoords)
}

function getMatrixElement(matrix, coords) {
  return matrix[coords[]]
}
