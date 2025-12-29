# Overview
this is for demo automation testing POM + Fixtures

# Structure Folders
```
tests/
├── fixtures/
├── pages/
├── steps/
├── specs/
.env/
```
- fixtures: Avoid repeating setup logic in each test
- pages: Separate UI logic from test logic
- steps: Improve readability and reusability of test flows
- specs: Contains test case, Keep test cases clean and easy to understand

# Getting Started
# 1. Clone Repository
```
https://github.com/ekokrismn/playwright-demo-conduit.git
```
# 2. Install Dependency
```
npm install
```
# 3. Install playwright 
```
npm init playwright@latest
```

# How to Run
```
npx playwright test
```
