const { test, expect } = require ("@playwright/test");
const { chromium } = require("playwright");
const {
  email,
  password,
  incorrectEmail,
  incorrectPassport,
} = require("../user.js");


test ('Right keys', async ({ page }) => {
  
    
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.fill('[placeholder="Email"]', email); 
    
    await page.fill('[placeholder="Пароль"]', password);
    await page.click('[data-testid="login-submit-btn"]');
    await expect(page).toHaveURL("https://netology.ru/profile");
  })

  test ('No right keys', async ({ page }) => {
  
    
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.fill('[placeholder="Email"]', incorrectEmail);
    await page.fill('[placeholder="Пароль"]', incorrectPassport);
    await page.click('[data-testid="login-submit-btn"]');
    const error = await page.locator('[data-testid="login-error-hint"]');
    await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
  })