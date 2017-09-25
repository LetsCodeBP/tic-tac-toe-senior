'use strict'

import renderGame from './render.js'

const gameRoot = document.querySelector('.game-root')

const gameState = [
  ['X', 'X', 'X'],
  ['X', 'X', 'X'],
  ['X', 'X', 'X']
]

renderGame(gameRoot, gameState)
