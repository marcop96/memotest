describe("Se asegura que funcione el sitio", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/src/");
  });
});
