describe("Contact form", () => {
  it("Should visit the app", () => {
    cy.visit("/");
  });

  it("Should jump to the Contact section", () => {
    cy.get('[data-testid="contact"]').click();
    cy.url().should("include", "#contact");
  });

  it("Should accept a name input", () => {
    cy.get("[data-testid=name]")
      .type("Test Name")
      .should("have.value", "Test Name");
    cy.get("[data-testid=send]").should("be.disabled");
  });

  it("Should accept a email input", () => {
    cy.get("[data-testid=email]")
      .type("test@email.com")
      .should("have.value", "test@email.com");
    cy.get("[data-testid=send]").should("be.disabled");
  });

  it("Should accept a message input", () => {
    cy.get("[data-testid=message]")
      .type("Message body")
      .should("have.value", "Message body");
    cy.get("[data-testid=send]").should("be.enabled");
  });

  it("Should if email is invalid", () => {
    cy.get("[data-testid=email]")
      .clear()
      .type("test@test")
      .should("have.value", "test@test");
    cy.get("[data-testid=send]").should("be.disabled");
  });

  it("Should if name is invalid", () => {
    cy.get("[data-testid=email]")
      .clear()
      .type("test@email.com")
      .get("[data-testid=name]")
      .clear()
      .type("foo_bar")
      .should("have.value", "foo_bar");
    cy.get("[data-testid=send]").should("be.disabled");
  });

  it("Should submit", () => {
    cy.get("[data-testid=name]")
      .clear()
      .type("Test Name")
      .should("have.value", "Test Name");
    cy.get("[data-testid=send]").should("be.enabled");
  });
});
