# Project: QA Automation Challenge E2E 

## Playwright.

### Technologies used:
- Visual Studio Code 1.88.1 (Universal)
- Node js v20.12.2

### How to Install.

1. Clone the code repository.
`https://github.com/heam021/QAAtutomationChallengeE2E.git`

2. You need to have Playwright dependencies installed.
`npm init playwright@latest`

### Running Test Scripts
- To run the project use the command: 
`npx playwright test` 

### Generate Reports
- To view the report use the command:
`npx playwright show-report`

There is the possibility of generating a report with allure but the information that 
playwright provides by itself is very accurate.

### Headless and multi-browsers

The project is configured to run in multiple browsers and heladlees off but it can be run differently according to the needs.

- In the playwright.config file you can set the headless property to true as follows `headless: true`

- In the projects section you can comment out or remove the browsers you don't need to use.




