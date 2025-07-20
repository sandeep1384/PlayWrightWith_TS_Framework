# Playwright Automation Framework (TypeScript)

This repository contains a robust and scalable end-to-end automation framework built with **Playwright** and **TypeScript**. The framework follows industry best practices to ensure maintainability, reusability, and enhanced test reporting.

---

## ✨ Key Features

- **✅ Page Object Model (POM)**  
  Implements the POM design pattern to promote code reusability and reduce test maintenance effort.

- **✅ Fixtures Integration**  
  Utilizes Playwright's powerful [Fixtures](https://playwright.dev/docs/test-fixtures) to set up reusable test contexts and environments.

- **✅ Allure Reporting**  
  Integrated with [Allure Reporter](https://github.com/allure-framework/allure-js) for detailed, visually rich test reports.

---

## 📁 Project Structure

├── tests/ # Test cases written using Playwright Test
│ ├── loginTest.spec.ts
│
├── pages/ # Page Object files
│ ├── basePage.ts
│ ├── dashboardPage.ts
│ ├── landingPage.ts
│ 
├── fixtures/ # Custom fixtures
│ ├── testFixtures.ts
│ 
├── allure-report/ # Allure reports
│
├── playwright.config.ts # Playwright configuration
├── tsconfig.json # TypeScript configuration
├── package.json # NPM dependencies and scripts


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sandeep1384/PlayWrightWith_TS_Framework
cd PlayWrightWith_TS_Framework

### 2. Install Dependencies

npm install

### 3. Run Tests

npx playwright test

### 4. Run Tests with Allure Reporting

npx playwright test --reporter=line,allure-playwright

### 5. View Allure Report

npx allure generate ./allure-results --clean -o ./reports
npx allure open ./reports

📦 Scripts
| Command                      | Description               |
| ---------------------------- | ------------------------- |
| npx playwright test`        | Run all tests             |
| npx playwright show-report` | Show HTML report          |
| npx allure open`            | Open the Allure report UI |

🛠️ Built With

1. Playwright

2. TypeScript

3. Allure Report

4. Playwright Test Runner





