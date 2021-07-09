const selector = {
  nameInput: '[data-test-id="contact-form-name-input"]',
  emailInput: '[data-test-id="contact-form-email-input"]',
  messageTextarea: '[data-test-id="contact-form-message-textarea"]',
  submitButton: '[data-test-id="contact-form-submit-button"]',
};

describe("ContactForm", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has all fields empty by default", () => {
    cy.get(selector.nameInput).should("be.empty");
    cy.get(selector.emailInput).should("be.empty");
    cy.get(selector.messageTextarea).should("be.empty");
  });

  it("has the submit button disabled by default", () => {
    cy.get(selector.submitButton).should("be.disabled");
  });

  it("has the submit button disabled if name field is empty", () => {
    cy.get(selector.nameInput).should("be.empty");
    cy.get(selector.emailInput).type("hello@example.com");
    cy.get(selector.messageTextarea).type("Test Message");
    cy.get(selector.submitButton).should("be.disabled");
  });

  it("has the submit button disabled if email field is empty", () => {
    cy.get(selector.nameInput).type("Hello World");
    cy.get(selector.emailInput).should("be.empty");
    cy.get(selector.messageTextarea).type("Test Message");
    cy.get(selector.submitButton).should("be.disabled");
  });

  it("has the submit button disabled if message field is empty", () => {
    cy.get(selector.nameInput).type("Hello World");
    cy.get(selector.emailInput).type("hello@example.com");
    cy.get(selector.messageTextarea).should("be.empty");
    cy.get(selector.submitButton).should("be.disabled");
  });

  it("has the submit button enables if all fields are filled", () => {
    cy.get(selector.nameInput).type("Hello World");
    cy.get(selector.emailInput).type("hello@example.com");
    cy.get(selector.messageTextarea).type("Test Message");
    cy.get(selector.submitButton).should("be.enabled");
  });
});
