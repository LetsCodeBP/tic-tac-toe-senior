'use strict'

:wqimport test from 'ava'
import {generateEmptyGame, config, reduceTurn} from './game.js'

test(t => {
  const _ = config.EMPTY_TOKEN
  const gameState = generateEmptyGame()
  t.deepEqual(gameState.matrix, [[_, _, _], [_, _, _], [_, _, _]])
  t.deepEqual(gameState.turn, 0)
})

test(t => {
  const X = config.X_TOKEN
  const O = config.O_TOKEN
  const _ = config.EMPTY_TOKEN
  const previousState = {
    matrix: [[_, X, _], [_, _, _], [_, _, _]],
    turn: 1
  }
  const action = {
    position: [0, 0]
  }
  const gameState = reduceTurn(previousState, action)
  t.deepEqual(gameState.matrix, [[O, X, _], [_, _, _], [_, _, _]])
})


test(t => {
  const X = config.X_TOKEN
  const _ = config.EMPTY_TOKEN
  const previousState = {
    matrix: [[_, _, _], [_, _, _], [_, _, _]],
    turn: 0
  }
  const action = {
    position: [0, 0]
  }
  const gameState = reduceTurn(previousState, action)
  t.deepEqual(gameState.turn, 1)
})

test(t => {
  const X = config.X_TOKEN
  const _ = config.EMPTY_TOKEN
  const previousState = {
    matrix: [[_, _, _], [_, _, _], [_, _, _]],
    turn: 0
  }
  const action = {
    position: [0, 0]
  }
  const gameState = reduceTurn(previousState, action)
  t.deepEqual(gameState.matrix, [[X, _, _], [_, _, _], [_, _, _]])
})

test(t => {
  const X = config.X_TOKEN
  const _ = config.EMPTY_TOKEN
  const previousState = {
    matrix: [[_, _, _], [_, _, _], [_, _, _]],
    turn: 0
  }
  const action = {
    position: [1, 0]
  }
  const gameState = reduceTurn(previousState, action)
  t.deepEqual(gameState.matrix, [[_, X, _], [_, _, _], [_, _, _]])
})

test(t => {
  const X = config.X_TOKEN
  const O = config.O_TOKEN
  const _ = config.EMPTY_TOKEN
  const previousState = {
    matrix: [[O, _, X], [_, _, _], [_, _, _]],
    turn: 2
  }
  const action = {
    position: [1, 0]
  }
  const gameState = reduceTurn(previousState, action)
  t.deepEqual(gameState.matrix, [[O, X, X], [_, _, _], [_, _, _]])
})

test(t => {
  const X = config.X_TOKEN
  const O = config.O_TOKEN
  const _ = config.EMPTY_TOKEN
  const previousState = {
    matrix: [[X, _, _], [_, _, _], [_, _, _]],
    turn: 1
  }
  const action = {
    position: [0, 0]
  }
  const gameState = reduceTurn(previousState, action)
  t.deepEqual(gameState.matrix, [[X, _, _], [_, _, _], [_, _, _]])
})



