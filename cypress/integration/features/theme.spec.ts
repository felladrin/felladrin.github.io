describe("Theme", () => {
  const selector = {
    html: ":root",
    toggleThemeButton: '[data-test-id="toggle-theme-button"]',
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it("starts with dark theme", () => {
    cy.get(selector.html).should("have.data", "theme", "dark");
  });

  it("is white after clicking theme-toggle button", () => {
    cy.get(selector.toggleThemeButton).click();
    cy.get(selector.html).should("have.data", "theme", "light");
  });

  it("persists the theme after the page is reloaded", () => {
    cy.get(selector.toggleThemeButton).click();
    cy.reload();
    cy.get(selector.html).should("have.data", "theme", "light");

    cy.get(selector.toggleThemeButton).click();
    cy.reload();
    cy.get(selector.html).should("have.data", "theme", "dark");
  });
});
