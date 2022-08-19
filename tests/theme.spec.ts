import { test, expect } from "@playwright/test";

test.describe("Theme", () => {
  const selector = {
    body: "body",
    toggleThemeButton: '[data-test-id="toggle-theme-button"]',
  };

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("starts with light theme", async ({ page }) => {
    await expect(page.locator(selector.body)).not.toHaveClass("dark-mode");
  });

  test("is dark after clicking theme-toggle button", async ({ page }) => {
    await page.locator(selector.toggleThemeButton).click();
    await expect(page.locator(selector.body)).toHaveClass("dark-mode");
  });

  test("persists the theme after the page is reloaded", async ({ page }) => {
    await page.locator(selector.toggleThemeButton).click();
    await expect(page.locator(selector.body)).toHaveClass("dark-mode");
    await page.reload();
    await expect(page.locator(selector.body)).toHaveClass("dark-mode");

    await page.locator(selector.toggleThemeButton).click();
    await expect(page.locator(selector.body)).not.toHaveClass("dark-mode");
    await page.reload();
    await expect(page.locator(selector.body)).not.toHaveClass("dark-mode");
  });
});
