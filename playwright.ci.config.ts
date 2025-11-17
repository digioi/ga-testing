import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testIgnore: [
    "./infrastructure",
    "./infrastructure/**/*",
    "./scripts",
    "./scripts/**/*",
  ]
});
