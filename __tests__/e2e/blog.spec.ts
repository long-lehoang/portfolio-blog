import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test("should display blog listing page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("heading", { name: "Blog", level: 1 })).toBeVisible();
  });

  test("should display blog post cards", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("heading", { name: "How I Built My Portfolio Site" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Why I Love TypeScript" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "My Journey Into Open Source" })).toBeVisible();
  });

  test("should navigate to a blog post", async ({ page }) => {
    await page.goto("/blog");
    await page.getByRole("heading", { name: "How I Built My Portfolio Site" }).click();
    await expect(page).toHaveURL(/\/blog\/how-i-built-my-portfolio/);
    // Use the header-scoped heading to avoid matching markdown content h1
    await expect(
      page.locator("header").getByRole("heading", { name: "How I Built My Portfolio Site" })
    ).toBeVisible();
  });

  test("should display back to blog link on post page", async ({ page }) => {
    await page.goto("/blog/how-i-built-my-portfolio");
    await expect(page.getByText("Back to blog")).toBeVisible();
  });

  test("should navigate back to blog list", async ({ page }) => {
    await page.goto("/blog/how-i-built-my-portfolio");
    await page.getByText("Back to blog").click();
    await expect(page).toHaveURL(/\/blog$/);
  });

  test("should display tags on blog posts", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByText("Next.js").first()).toBeVisible();
  });

  test("should display post date", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByText("March 10, 2026")).toBeVisible();
  });
});
