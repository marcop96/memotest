const URL = "http://127.0.0.1:5500/src/";
const TILE_QTY = 12;

context("memotest", () => {
  before(() => {
    cy.visit(URL);
  });
  it("checks if theres a board and tiles", () => {
    cy.get("#board").find(".square").should("have.length", TILE_QTY);
  });
});

//doesnt work
