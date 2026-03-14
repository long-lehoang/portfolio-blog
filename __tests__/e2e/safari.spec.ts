import { test, expect } from "@playwright/test";

// Safari-specific tests targeting known iOS Safari issues:
// 1. ScrollReveal content visibility (IntersectionObserver with negative rootMargin)
// 2. Animated gradient text rendering
// 3. Backdrop-filter / blur on navbar and cards
// 4. Mask-composite animated border on cards
// 5. Touch interactions (no mouse events on mobile)

test.describe("Safari Mobile", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for the page to be fully loaded and interactive
    await page.waitForLoadState("networkidle");
  });

  test("hero section content is visible on load", async ({ page }) => {
    await expect(page.getByText("Long Le", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("paragraph").filter({ hasText: /^Backend Engineer$/ })
    ).toBeVisible();
    await expect(page.getByText("Download CV")).toBeVisible();
    await expect(page.getByText("Contact Me")).toBeVisible();
  });

  test("scroll reveal sections become visible after scrolling", async ({ page }) => {
    // Sections use ScrollReveal (opacity: 0 → 1). On Safari, IntersectionObserver
    // with negative rootMargin can silently fail, keeping content permanently hidden.
    const aboutSection = page.locator("#about");
    await aboutSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();

    const experienceSection = page.locator("#experience");
    await experienceSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Experience", exact: true })).toBeVisible();
    await expect(page.getByText("Flodesk")).toBeVisible();
    await expect(page.getByText("FPT Software").first()).toBeVisible();

    const skillsSection = page.locator("#skills");
    await skillsSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
    await expect(page.getByText("Programming Languages")).toBeVisible();
    await expect(skillsSection.getByText("Java", { exact: true })).toBeVisible();

    const projectsSection = page.locator("#projects");
    await projectsSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();

    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Get In Touch" })).toBeVisible();
  });

  test("all experience entries are rendered and visible", async ({ page }) => {
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(page.getByText("Flodesk")).toBeVisible();
    await expect(page.getByText("FPT Software").first()).toBeVisible();
    await expect(page.getByText("KMS Technology")).toBeVisible();
    await expect(page.getByText("Cloud Nine Solutions")).toBeVisible();
  });

  test("skill items are rendered and visible", async ({ page }) => {
    const skillsSection = page.locator("#skills");
    await skillsSection.scrollIntoViewIfNeeded();
    await expect(skillsSection.getByText("Java", { exact: true })).toBeVisible();
    await expect(skillsSection.getByText("Golang", { exact: true })).toBeVisible();
    await expect(skillsSection.getByText("Docker", { exact: true })).toBeVisible();
    await expect(skillsSection.getByText("Microservices", { exact: true })).toBeVisible();
  });

  test("project cards are rendered and visible", async ({ page }) => {
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "E-Commerce Platform" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Task Management App" })).toBeVisible();
  });

  test("navbar is visible and sticky", async ({ page }) => {
    // Navbar uses backdrop-blur (backdrop-filter) which can be problematic on Safari
    const navbar = page.locator("nav").first();
    await expect(navbar).toBeVisible();

    // Scroll down and verify navbar stays visible (sticky/fixed positioning)
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(navbar).toBeVisible();
  });

  test("social links in contact section are tappable", async ({ page }) => {
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();
    // Verify links exist and have correct href (touch-friendly targets)
    const linkedinLink = contactSection.getByRole("link", { name: "linkedin" });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute("href", /linkedin\.com/);

    const emailLink = contactSection.getByRole("link", { name: "email" });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", /mailto:/);
  });

  test("footer is visible after scrolling to bottom", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByText(/All rights reserved/)).toBeVisible();
    await expect(page.getByText(/Long Le/).first()).toBeVisible();
  });
});
