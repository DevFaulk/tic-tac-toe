const gameAnnouncer = document.getElementById('gameAnnouncer');
const gameButton = document.getElementById('gameButton');
const gameTableBody = document.getElementById('gameTableBody');

function createGame() {
  let topRow = new Row(row);
  topRow.style.borderBottom = 'thin solid black';
  gameTableBody.appendChild(topRow);
  let topLeft = new Cell(cell);
  topRow.appendChild(topLeft);
  let midRow = new Row(row);
  midRow.style.borderBottom = 'thin solid black';
  gameTableBody.appendChild(midRow);
  let bottomRow = new Row(row);
  bottomRow.style.borderTop = 'thin solid black';
  gameTableBody.appendChild(bottomRow);
}

gameButton.onclick = function () {
  gameAnnouncer.style.display = 'flex';
  gameButton.style.display = 'none';
};
