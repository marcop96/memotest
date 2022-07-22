const URL = "http://127.0.0.1:5500/src/";

context("Memotest", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("plays memotest", () => {
    const TILE_QTY = 12;

    it("checks if theres a board and tiles", () => {
      cy.get("#board").find(".square").should("have.length", TILE_QTY);
    });

    it("checks that tiles are random", () => {
      cy.get(".square").then((tiles) => {
        let originalClasses = [];
        tiles.each(function (i, tile) {
          originalClasses.push(tile.className);
        });

        cy.visit(URL);

        let newClasses = [];
        cy.get(".square").then((newTiles) => {
          newTiles.each(function (i, tile) {
            newClasses.push(tile.className);
          });

          cy.wrap(originalClasses).should("not.deep.equal", newClasses);
        });
      });
    });

    describe("solves the game", () => {
      let pairsMap, pairsList;
      it("chooses a wrong combination", () => {
        cy.get(".square").then((tiles) => {
          pairsMap = getTilePairs(tiles);
          pairsList = Object.values(pairsMap);

          // console.log(pairsList);
          cy.get(pairsList[0][0]).click();
          cy.get(pairsList[1][0]).click();

          cy.get(".square").should("have.length", TILE_QTY);
        });
      });

      it("resuelve el juego", () => {
        cy.get(".square").should("have.length", TILE_QTY);

        pairsList.forEach((pair) => {
          cy.get(pair[0]).click();
          cy.get(pair[1]).click();
        });

        cy.get(".cuadro").should("have.length", 0);

        cy.get("#board").should("not.be.visible");
        const turns = TILE_QTY / 2 + 1; //there was an incorrect move
        cy.get(".end-game")
          .should("be.visible")
          .contains(`congratulations! you won in ${turns} turns`);
      });
    });
  });
});

function getTilePairs(tiles) {
  const pairs = {};

  tiles.each((i, tile) => {
    //notar que hay un espacio después de h-100
    //amarillo
    const colorClass = tile.className.replace(
      "square h-full w-full transition-duration-500 ease-in-out ",
      ""
    );

    if (pairs[colorClass]) {
      pairs[colorClass].push(tile);
    } else {
      pairs[colorClass] = [tile];
    }
  });

  // console.log(pairs);
  return pairs;
}
