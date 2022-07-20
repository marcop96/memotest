let $BOARD = document.querySelector("#board");
let $SQUARES = $BOARD.querySelectorAll("#square");
let $END_GAME_DIV = document.querySelector("end-game");
let $firstTile = null;
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

  randomColors.forEach(function (color, i) {
    //adds color to each element in the array
    $SQUARES[i].classList.add(color);
  });
}
function tileHandler($currentTile) {
  showTiles($currentTile);
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
    } else {
      hideTiles2($firstTile);
      hideTiles2($currentTile);
    }
  }
}
function hideTiles2(tile) {
  tile.classList.add("occult");
}
function hideTiles() {
  $SQUARES.forEach(function (a) {
    a.classList.add("occult");
  });
}
function showTiles(tile) {
  tile.classList.remove("occult");
}
function areTilesSimilar($firstTile, $currentTile) {
  if ($firstTile.className === $currentTile.className) {
    return true;
  } else {
    return false;
  }
}

$BOARD.onclick = function (e) {
  const $currentTile = e.target;
  showTiles($currentTile);
  tileHandler($currentTile);
};
function completeTile(tile) {
  tile.classList.add("completed");
  tile.remove;
}

configGame();
