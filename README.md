# AI Test Repo 1

## Overview
This is a utility library for common JavaScript operations.

## Features
- Calculate sum of numbers
- Format dates in various locales
- Validate email addresses
- Configurable API settings

## Installation
```bash
npm install ai-test-utils
```

## Usage
```javascript
const { calculateSum, formatDate, validateEmail } = require('./utils');

console.log(calculateSum([1, 2, 3, 4])); // 10
console.log(formatDate(new Date())); // December 25, 2025
console.log(validateEmail('test@example.com')); // true
```
