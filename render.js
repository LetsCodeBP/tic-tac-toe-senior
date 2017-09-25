'use strict'

export default function renderGame(gameRoot, gameState) {
  const mainTable = document.createElement('table')
  gameState.forEach(row => {
    const tableRow = document.createElement('tr')
    row.forEach(cell => {
      const tableCell = document.createElement('td')
      tableCell.innerHTML = cell
      tableRow.appendChild(tableCell)
    })
    mainTable.appendChild(tableRow)
  })
  gameRoot.appendChild(mainTable)
}
