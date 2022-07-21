const URL = "http://127.0.0.1:5500/src/";
const TILE_QTY = 12;
describe("Se asegura que funcione el sitio", () => {
  it("passes", () => {
    cy.visit(URL);
    cy.get("#board").find(".square").should("have.length", TILE_QTY);
  });
});

// it("assures that theres a board and tiles", () => {
// });
