'use strict'

import renderGame from './render.js'
import {generateEmptyGame, reduceTurn, config} from './game.js'

const gameRoot = document.querySelector('.game-root')

let gameState = generateEmptyGame()

gameRoot.addEventListener('click', (event) => {
  const target = event.target
  const i = getChildIndex(target)
  const j = getChildIndex(target.parentElement)
  gameState = reduceTurn(gameState, {
    position: [i, j] 
  })
  renderGame(gameRoot, gameState)
})

function getChildIndex(child) {
  return Array.from(child.parentElement.children).indexOf(child)
}

renderGame(gameRoot, gameState)
