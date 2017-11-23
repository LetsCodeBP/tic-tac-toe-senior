'use strict'

export default function renderGame(gameRoot, gameState) {
  const mainTable = document.createElement('table')
  gameState.matrix.forEach(row => renderRow(mainTable, row))
  gameRoot.innerHTML = ''
  gameRoot.appendChild(mainTable)
}

function renderRow(mainTable, row) {
  const tableRow = document.createElement('tr')
  row.forEach(cell => renderCells(tableRow, cell))
  mainTable.appendChild(tableRow)
}

function renderCells(tableRow, cell) {
  const tableCell = document.createElement('td')
  tableCell.innerHTML = cell
  tableRow.appendChild(tableCell)
}
