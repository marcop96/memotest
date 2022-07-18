let $BOARD = document.querySelector("#board");
let $SQUARES = $BOARD.querySelectorAll("#square");
let $END_GAME_DIV = document.querySelector("end-game");
let currentSquare = [];

function configGame() {
  const colors = ["blue", "red", "green", "yellow", "pink", "orange"];
  const duplicateColors = colors.concat(colors);
  randomizeColors($SQUARES, duplicateColors);
}
function randomizeColors($SQUARES, colors) {
  const randomColors = colors.sort(function () {
    return 0.5 - Math.random();
  });

  //para cada elemento del array randomColor(elemento,indice)
  randomColors.forEach(function (color, i) {
    //agrega la clase color(elemento de randomcolors)
    $SQUARES[i].id = color;
  });
}

$BOARD.onclick = function (e) {
  const $ELEMENT = e.target;
  if (
    $ELEMENT.id == "red" ||
    $ELEMENT.id == "blue" ||
    $ELEMENT.id == "green" ||
    $ELEMENT.id == "yellow" ||
    $ELEMENT.id == "pink" ||
    $ELEMENT.id == "orange"
  ) {
    console.log(e.target.id);
  }
};
$SQUARES.forEach(function (square) {
  square.classList.add("occult");
});

configGame();
