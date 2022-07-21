const $BOARD = document.querySelector("#board");
const $SQUARES = $BOARD.querySelectorAll("#square");
const $END_GAME_CONTAINER = document.querySelector(".end-game");
let $END_GAME_TEXT = $END_GAME_CONTAINER.querySelector("h1");
let $firstTile = null;
let currentTile;
let turns = 0;
let turnsToComplete = 6;
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

  randomColors.forEach(function (color, i) {
    //adds color to each element in the array
    $SQUARES[i].classList.add(color);
  });
}
function tileHandler($currentTile) {
  showTile($currentTile);
  //if its null its the first tile clicked
  if ($firstTile === null) {
    $firstTile = $currentTile; // so it sets it up as current tile
  } else {
    if ($firstTile === $currentTile) {
      return;
    }
    turns++;
    if (areTilesSimilar($firstTile, $currentTile)) {
      completeTile($firstTile);
      completeTile($currentTile);
      turnsToComplete--;
    } else {
      hideTile($firstTile);
      hideTile($currentTile);
    }
    $firstTile = null;
  }
}
function hideTile(tile) {
  setTimeout(function () {
    tile.classList.add("occult");
  }, 500);
}
function hideTiles() {
  $SQUARES.forEach(function (a) {
    a.classList.add("occult");
  });
}
function showTile(tile) {
  tile.classList.remove("occult");
}
function areTilesSimilar($firstTile, $currentTile) {
  if ($firstTile.className === $currentTile.className) {
    return true;
  } else {
    return false;
  }
}
function didGameEnd() {
  if (turnsToComplete === 0) {
    $END_GAME_CONTAINER.classList.remove("nodisplay");
    $END_GAME_TEXT.innerText = `congratulations! you won in ${turns} turns`;
    $BOARD.classList.add("occult");
  }
}
function completeTile(tile) {
  setTimeout(function () {
    tile.classList.add("completed");
    tile.remove;
    didGameEnd();
  }),
    1000;
}

$BOARD.onclick = function (e) {
  const $currentTile = e.target;
  if ($currentTile.classList.contains("square")) {
    tileHandler($currentTile);
  }
};

configGame();
