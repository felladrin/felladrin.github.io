import { test, expect } from "@playwright/test";

test.describe("ContactForm", () => {
  const selector = {
    nameInput: '[data-test-id="contact-form-name-input"]',
    emailInput: '[data-test-id="contact-form-email-input"]',
    messageTextarea: '[data-test-id="contact-form-message-textarea"]',
    submitButton: '[data-test-id="contact-form-submit-button"]',
  };

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has all fields empty by default", async ({ page }) => {
    await expect(page.locator(selector.nameInput)).toBeEmpty();
    await expect(page.locator(selector.emailInput)).toBeEmpty();
    await expect(page.locator(selector.messageTextarea)).toBeEmpty();
  });

  test("has the submit button disabled by default", async ({ page }) => {
    await expect(page.locator(selector.submitButton)).toBeDisabled();
  });

  test("has the submit button disabled if name field is empty", async ({
    page,
  }) => {
    await expect(page.locator(selector.nameInput)).toBeEmpty();
    await page.locator(selector.emailInput).type("hello@example.com");
    await page.locator(selector.messageTextarea).type("Test Message");
    await expect(page.locator(selector.submitButton)).toBeDisabled();
  });

  test("has the submit button disabled if email field is empty", async ({
    page,
  }) => {
    await page.locator(selector.nameInput).type("Hello World");
    await expect(page.locator(selector.emailInput)).toBeEmpty();
    await page.locator(selector.messageTextarea).type("Test Message");
    await expect(page.locator(selector.submitButton)).toBeDisabled();
  });

  test("has the submit button disabled if message field is empty", async ({
    page,
  }) => {
    await page.locator(selector.nameInput).type("Hello World");
    await page.locator(selector.emailInput).type("hello@example.com");
    await expect(page.locator(selector.messageTextarea)).toBeEmpty();
    await expect(page.locator(selector.submitButton)).toBeDisabled();
  });

  test("has the submit button enables if all fields are filled", async ({
    page,
  }) => {
    await page.locator(selector.nameInput).type("Hello World");
    await page.locator(selector.emailInput).type("hello@example.com");
    await page.locator(selector.messageTextarea).type("Test Message");
    await expect(page.locator(selector.submitButton)).toBeEnabled();
  });
});
