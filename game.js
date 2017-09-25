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
  return range(SIZE).map(() => range(SIZE).fill(_))
}
