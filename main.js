'use strict'

import renderGame from './render.js'
import {generateEmptyGame} from './game.js'

const gameRoot = document.querySelector('.game-root')

const gameState = generateEmptyGame()

renderGame(gameRoot, gameState)
