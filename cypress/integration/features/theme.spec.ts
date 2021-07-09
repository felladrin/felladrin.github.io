describe("Theme", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("starts with dark theme", () => {
    cy.get(":root").should("have.data", "theme", "dark");
  });

  it("is white after clicking theme-toggle button", () => {
    cy.get('[data-test-id="toggle-theme-button"]').click();
    cy.get(":root").should("have.data", "theme", "light");
  });

  it("persists the theme after the page is reloaded", () => {
    cy.get('[data-test-id="toggle-theme-button"]').click();
    cy.reload();
    cy.get(":root").should("have.data", "theme", "light");

    cy.get('[data-test-id="toggle-theme-button"]').click();
    cy.reload();
    cy.get(":root").should("have.data", "theme", "dark");
  });
});
