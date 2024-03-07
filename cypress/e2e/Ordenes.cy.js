describe("Ordenes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/ordenes");
  });

  it("Muestra las ordenes que llegan de la base de datos", () => {
    cy.get("h1").contains("Ordenes");
  });

});
