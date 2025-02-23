import { test, expect } from '@playwright/test';

test.describe('Navigation and Basic Functionality', () => {
  test('should navigate to main pages', async ({ page }) => {
    // Home page
    await page.goto('/');
    await expect(page).toHaveTitle(/D4 Accountants/);

    // About page
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page.url()).toContain('/about');

    // Services page
    await page.getByRole('link', { name: /services/i }).click();
    await expect(page.url()).toContain('/services');
  });

  test('should submit contact form', async ({ page }) => {
    await page.goto('/');
    
    // Fill out the contact form
    await page.getByLabel(/name/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/message/i).fill('This is a test message');
    
    // Submit form and verify success message
    await page.getByRole('button', { name: /submit|send/i }).click();
    await expect(page.getByText(/thank you|success/i)).toBeVisible();
  });
});