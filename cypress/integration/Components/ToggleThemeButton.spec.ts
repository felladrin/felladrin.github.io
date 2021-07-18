describe("Theme", () => {
  const selector = {
    body: "body",
    toggleThemeButton: '[data-test-id="toggle-theme-button"]',
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it("starts with dark theme", () => {
    cy.get(selector.body).should("have.class", "dark-mode");
  });

  it("is white after clicking theme-toggle button", () => {
    cy.get(selector.toggleThemeButton).click();
    cy.get(selector.body).should("not.have.class", "dark-mode");
  });

  it("persists the theme after the page is reloaded", () => {
    cy.get(selector.toggleThemeButton).click();
    cy.get(selector.body).should("not.have.class", "dark-mode");
    cy.reload();
    cy.get(selector.body).should("not.have.class", "dark-mode");

    cy.get(selector.toggleThemeButton).click();
    cy.get(selector.body).should("have.class", "dark-mode");
    cy.reload();
    cy.get(selector.body).should("have.class", "dark-mode");
  });
});
