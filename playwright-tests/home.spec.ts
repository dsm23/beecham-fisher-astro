import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    /Solicitors, Southend-on-Sea, Essex - Beecham Fisher/,
  );
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Beecham Fisher Solicitors" }),
  ).toBeVisible();
});
