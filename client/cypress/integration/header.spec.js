describe("Top navigation bar", () => {
  it("Should visit the app", () => {
    cy.visit("/");
  });

  it("Should jump to the About section", () => {
    cy.get('[data-testid="about"]').click();
    cy.url().should("include", "#about");
  });

  it("Should jump to the Technology section", () => {
    cy.get('[data-testid="technology"]').click();
    cy.url().should("include", "#technology");
  });

  it("Should jump to the Portfolio section", () => {
    cy.get('[data-testid="portfolio"]').click();
    cy.url().should("include", "#portfolio");
  });

  it("Should jump to the Contact section", () => {
    cy.get('[data-testid="contact"]').click();
    cy.url().should("include", "#contact");
  });

  it("Should jump to the Quotes section", () => {
    cy.get('[data-testid="quotes"]').click();
    cy.url().should("include", "#quotes");
  });

  it("Should open hamburger menu in mobile", () => {
    cy.viewport(700, 850);
    cy.get('[data-testid="hamburger"]').click();
    cy.get('[data-testid="menu"]').should("be.visible");
  });

  it("Should close hamburger menu in mobile", () => {
    cy.viewport(700, 850);
    cy.get('[data-testid="hamburger"]').click();
    cy.get('[data-testid="menu"]').should("not.be.visible");
    cy.viewport(1000, 1200);
    cy.get('[data-testid="quotes"]').click();
  });
});
