import { test, expect } from "@playwright/test";

// Theme toggle uses desktop nav — only test on desktop Chromium
test.describe("Theme Toggle", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "Mobile Chrome", "Skip on mobile");
    await page.goto("/");
  });

  test("should have theme toggle button", async ({ page }) => {
    const toggle = page.getByLabel("Toggle theme").first();
    await expect(toggle).toBeVisible();
  });

  test("should toggle between light and dark mode", async ({ page }) => {
    const html = page.locator("html");
    const toggle = page.getByLabel("Toggle theme").first();

    // Click to toggle
    await toggle.click();
    await page.waitForTimeout(500);

    const classAfterFirstClick = await html.getAttribute("class");

    // Click again to toggle back
    await toggle.click();
    await page.waitForTimeout(500);

    const classAfterSecondClick = await html.getAttribute("class");

    // The classes should be different after toggling
    expect(classAfterFirstClick).not.toBe(classAfterSecondClick);
  });
});
