# JavaScript Learning Guide

## Introduction
Welcome to your JavaScript learning journey! This README will serve as your quick reference guide as you explore JavaScript, a powerful and widely used programming language for web development.

## Getting Started
### Prerequisites
- A code editor (e.g., [VS Code](https://code.visualstudio.com/), Sublime Text, or Atom)
- A web browser (Chrome, Firefox, Edge, etc.)
- Basic understanding of HTML and CSS (optional but helpful)

### How to Run JavaScript
1. **Using Browser Console**
   - Open Developer Tools (F12 or right-click → Inspect → Console)
   - Type JavaScript code and press Enter

2. **Using an HTML File**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>JavaScript Example</title>
   </head>
   <body>
       <script>
           console.log('Hello, JavaScript!');
       </script>
   </body>
   </html>
   ```

3. **Using Node.js (For Backend Development)**
   - Install [Node.js](https://nodejs.org/)
   - Run JavaScript files in the terminal using:
     ```sh
     node script.js
     ```

## JavaScript Basics
### Variables & Data Types
```javascript
let name = "John"; // String
const age = 25; // Number
var isStudent = true; // Boolean
```

### Operators
```javascript
let sum = 10 + 5; // Addition
let remainder = 10 % 3; // Modulo (remainder)
let result = (20 - 5) / 3; // Order of operations
```

### Conditional Statements
```javascript
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Loops
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration: ", i);
}
```

### Functions
```javascript
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice"));
```

## Advanced Topics
- **Arrays & Objects**
- **ES6 Features (let, const, arrow functions, template literals)**
- **DOM Manipulation**
- **Asynchronous JavaScript (Promises, Async/Await)**
- **APIs & Fetch**
- **Node.js & Express.js (Backend)**

## Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)

## Happy Coding! 🚀

