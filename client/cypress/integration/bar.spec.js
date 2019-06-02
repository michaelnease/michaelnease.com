describe("Top navigation bar", () => {
  it("Visit the app", () => {
    cy.visit("/");
  });

  it("Jump to the About section", () => {
    cy.get('[data-testid="about"]').click();
    cy.url().should("include", "#about");
  });

  it("Jump to the Technology section", () => {
    cy.get('[data-testid="technology"]').click();
    cy.url().should("include", "#technology");
  });

  it("Jump to the Portfolio section", () => {
    cy.get('[data-testid="portfolio"]').click();
    cy.url().should("include", "#portfolio");
  });

  it("Jump to the Contact section", () => {
    cy.get('[data-testid="contact"]').click();
    cy.url().should("include", "#contact");
  });

  it("Jump to the Quotes section", () => {
    cy.get('[data-testid="quotes"]').click();
    cy.url().should("include", "#quotes");
  });

  it("Jump to the About section in mobile", () => {
    cy.viewport(700, 850);
  });
});
