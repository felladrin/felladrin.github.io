import { test, expect } from "@playwright/test";

test("page has the correct title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
  await expect(page).toHaveTitle("Victor Nogueira");
});
