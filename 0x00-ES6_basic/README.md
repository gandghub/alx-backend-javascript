0x00. ES6 Basics
JavaScript | ES6
Project Overview
This project introduces the basic concepts of ES6 (ECMAScript 2015). You will learn about the new features in ES6, including let and const declarations, arrow functions, default parameters, rest and spread operators, and more.

Learning Objectives
By the end of this project, you should be able to explain:

What ES6 is
New features introduced in ES6
The difference between a constant and a variable
Block-scoped variables
Arrow functions and function parameters
Rest and spread function parameters
String templating in ES6
Object creation and properties in ES6
Iterators and for-of loops
Requirements
All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All files should end with a new line
A README.md file at the root of the project folder is mandatory
Your code should use the .js extension
Your code will be tested using the Jest Testing Framework
Your code will be analyzed using the linter ESLint with specific rules provided
All functions must be exported
Setup
Install NodeJS 12.11.x

Tasks:

0. **Const or let?**
   - Modify `function taskFirst` to instantiate variables using `const`.
   - Modify `function taskNext` to instantiate variables using `let`.

1. **Block Scope**
   - Modify variables inside the `function taskBlock` to avoid being overwritten inside the conditional block.

2. **Arrow functions**
   - Rewrite the `add` function using ES6’s arrow syntax.

3. **Parameter defaults**
   - Condense the `function getSumOfHoods` to one line using default parameter values.

4. **Rest parameter syntax for functions**
   - Modify `function returnHowManyArguments` to return the number of arguments passed using the rest parameter syntax.

5. **The wonders of spread syntax**
   - Use spread syntax to concatenate two arrays and each character of a string in `function concatArrays`.

6. **Take advantage of template literals**
   - Rewrite the return statement in `function getSanFranciscoDescription` using a template literal.

7. **Object property value shorthand syntax**
   - Modify the `budget` object in `function getBudgetObject` to use property value shorthand syntax.

8. **No need to create empty objects before adding in properties**
   - Rewrite `function getBudgetForCurrentYear` using ES6 computed property names.

9. **ES6 method properties**
   - Rewrite `function getFullBudgetObject` to use ES6 method properties.

10. **For...of Loops**
    - Rewrite `function appendToEachArrayValue` to use ES6’s `for...of` operator and replace `var` with ES6-friendly syntax.

11. **Iterator**
    - Write `function createEmployeesObject` that returns an object with the department name and a list of employees.

12. **Let's create a report object**
    - Write `function createReportObject` that returns an object containing the key `allEmployees` and a method property `getNumberOfDepartments`.

