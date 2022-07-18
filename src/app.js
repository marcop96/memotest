let $BOARD = document.querySelector("#board");
let $SQUARES = $BOARD.querySelectorAll("#square");
let $END_GAME_DIV = document.querySelector("end-game");
let currentSquare = [];

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

$BOARD.onclick = function (e) {
  const $ELEMENT = e.target;
  if (
    $ELEMENT.classList.contains("red") ||
    $ELEMENT.classList.contains("blue") ||
    $ELEMENT.classList.contains("green") ||
    $ELEMENT.classList.contains("yellow") ||
    $ELEMENT.classList.contains("pink") ||
    $ELEMENT.classList.contains("orange")
  ) {
    console.log(e.target);
    showTiles(e.target);
  }
};
function hideTiles() {
  $SQUARES.forEach(function (a) {
    a.classList.add("occult");
  });
}
function showTiles(tile) {
  tile.classList.remove("occult");
}
function correctTile() {}
configGame();
