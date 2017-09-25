'use strict'

import test from 'ava'
import {generateEmptyGame, config} from './game.js'

test(t => {
  const X = config.X_TOKEN
  const O = config.O_TOKEN
  const _ = config.EMPTY_TOKEN
  const gameState = generateEmptyGame()
  t.deepEqual(gameState, [[_, _, _], [_, _, _], [_, _, _]])
})
