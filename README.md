# Javascript deep dive
> TIL from Javascript deep dive

- Chapter01: What is programming?
- Chapter02: What is Javascript?
- Chapter03: Environment of Javascript
- Chapter04: Variable
  - When are variables declared and assigned?
  - What is hoisting?
    ```javascript
    console.log(variable); // undefined 2. console.log

    variable = 80; // 3. assigned
    var variable; // 1. declar

    console.log(variable) // 80 // 4. console.log
    ```
- Chapter05: Expression and Statement
  - value, expression, evalutate
- Chapter06: Data type
  - Why we need the datatypes?
  - Primitive and object/reference type
  - What is difference of immutable and mutable?
- Chapter07: Operator
- Chapter08: Control flow statement
  - Conditional statement
    - What is fall through in switch statement?
  - loop statement
    - What situtations should we use the for or while?
    - What is label statement?
- Chapter09: Type casting
  - Explicit coercion and Implicit coercion
  - Truthy and falsy value in javascript
  - Short-circuit evaulation
  - Optional chaining `?.`
  - null coalescing `??`
- Chapter10: Object literal
  - Property and Method
- Chapter11: Primitive type and Object/refrence type
  - Mutable and immutable value
  - What is pass by value and pass by reference?
  - What is array like object?
  - What is shallow copy and deep copy
- Chapter12: Function
  - Argument, Parameter, Return value
  - Functinos are called by identifier, not by function name
  - Javascript function is the first class object
  - What is different between function declaration and function literal?
  - Arrow function(ES6)
  - Recursive function
  - What is callback function and higher-order function?
  - Pure and impure function
- Chapter13: Scope
  - Identifier resolution
  - Lexcial environment and Execution context
  - Scope is name space
  - Scope chain
  - Lexical scope and dynamic scope
- Chapter14: The problem of global variable
