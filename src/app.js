let $BOARD = document.querySelector("#board");
let $SQUARES = $BOARD.querySelectorAll("#square");
let $END_GAME_DIV = document.querySelector("end-game");
let $firstSquare = null;
let currentTile;
let turns = 0;
function configGame() {
  const colors = ["blue", "red", "green", "yellow", "pink", "orange"];
  const duplicateColors = colors.concat(colors);
  randomizeColors($SQUARES, duplicateColors);
  hideTiles();
}
function randomizeColors($SQUARES, colors) {
  const randomColors = colors.sort(function () {
    return 0.5 - Math.random();
  });

  //para cada elemento del array randomColor(elemento,indice)
  randomColors.forEach(function (color, i) {
    //agrega la clase color(elemento de randomcolors)
    $SQUARES[i].classList.add(color);
  });
}
function tileHandler($currentTile) {
  showTiles($currentTile);
  //if its null its the first tile clicked
  if ($firstSquare === null) {
    $firstSquare = $currentTile; // so it sets it up as current tile
  } else {
    if ($firstSquare === $currentTile) {
      return;
    }
  }
}

$BOARD.onclick = function (e) {
  const $currentTile = e.target;
  showTiles($currentTile);
  tileHandler($currentTile);
  correctTile($firstSquare, $currentTile);
};

function hideTiles() {
  $SQUARES.forEach(function (a) {
    a.classList.add("occult");
  });
}
function showTiles(tile) {
  tile.classList.remove("occult");
}
function correctTile($firstSquare, $currentTile) {
  if ($firstSquare.className === $currentTile.className) {
    console.log("iguales");
  } else {
    console.log("no");
  }
}
configGame();
