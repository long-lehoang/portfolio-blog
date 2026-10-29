import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display hero section with name and title", async ({ page }) => {
    await expect(page.getByText("Long Le", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("paragraph").filter({ hasText: /^Backend Engineer$/ })
    ).toBeVisible();
  });

  test("should display all main sections", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Experience", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Get In Touch" })).toBeVisible();
  });

  test("should have Download CV button", async ({ page }) => {
    await expect(page.getByText("Download CV")).toBeVisible();
  });

  test("should have Contact Me button", async ({ page }) => {
    await expect(page.getByText("Contact Me")).toBeVisible();
  });

  test("should display experience entries", async ({ page }) => {
    await expect(page.locator("#experience").getByText("Flodesk", { exact: true })).toBeVisible();
    await expect(page.locator("#experience").getByText("FPT Software").first()).toBeVisible();
    await expect(page.locator("#experience").getByText("KMS Technology")).toBeVisible();
  });

  test("should display project cards", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Event Processing Fairness System" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Flodesk Remote MCP Server" })).toBeVisible();
  });

  test("should display skill categories", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Programming Languages" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Backend & Cloud" })).toBeVisible();
  });

  test("should display footer", async ({ page }) => {
    await expect(page.getByText(/All rights reserved/)).toBeVisible();
  });
});
