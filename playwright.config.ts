import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['allure-playwright']],

  /* Shared settings for all the projects below */
  use: {
    // baseURL: 'http://localhost:3000', // Optional
    headless: true,
    trace: 'on-first-retry',
  },

  /* Define browser projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true, // Ensure it's headless in Docker
      },
    },
    // Enable others as needed:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], headless: true },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], headless: true },
    // },
  ],

  // Optionally, add dev server if needed
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
