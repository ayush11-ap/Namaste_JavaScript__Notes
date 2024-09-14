# Time, Tide & JavaScript Waits for None ⏳
## 1. JavaScript Execution Context 🌐

1. **Everything in JavaScript happens inside an `Execution Context`**.
    - Think of it as a box where all the code is executed.

2. **Two Components of Execution Context**:
    - **Memory Component (Variable Environment) 🧠**: 
        - This is where variables and functions are stored in a key-value pair format.
        - Example: Imagine a cabinet with labeled drawers. Each drawer (key) holds specific items (values), like your socks, documents, etc.
    - **Code Component (Thread of Execution) 📝**:
        - This is where the code is executed line by line, like following a recipe step by step.

3. **JavaScript as a Synchronous, Single-Threaded Language**:
    - JavaScript executes code in a specific order, one line at a time, just like waiting in line at a checkout counter 🛒.

4. **Behind the Scenes**:
    - JavaScript starts by creating a `Global Execution Context` for your entire script.
    - Every time a function is called, a new `Execution Context` is created for that function and added to the call stack.
    - Example: It's like going through a series of tasks, where you start a new task (function) only after finishing the current one unless it requires waiting, like making tea ☕.

## 2. The Two Phases of JavaScript Execution Context 🛠️

1. **Phase 1: Memory Creation** 🧠
    - During this phase, memory is allocated for all variables and functions.
    - Each variable is initially assigned a special keyword: `undefined`.
    - Example: Think of this phase as setting up a workspace, where you place all the tools (variables and functions) you'll need, but without actually using them yet.

2. **Phase 2: Code Execution** 📝
    - In this phase, the code is executed line by line within the Code Component (Thread of Execution), replacing `undefined` with actual values.
    - Example: Now, you start working with the tools you set up earlier, using them to complete your tasks step by step.

3. **Function Invocation and New Execution Contexts** 🔄
    - Every time a new function is invoked, a new `Execution Context` is created.
    - The process of Phase 1 (Memory Creation) and Phase 2 (Code Execution) is repeated for each new function.
    - Example: Calling a function is like starting a new mini-project within your main project, setting up tools, and then executing tasks.

4. **Call Stack and Execution Context Management** 📚
    - The `Global Execution Context` (Global EC) is created first and sits at the bottom of the Call Stack.
    - When a function is called, a new Execution Context (EC1, EC2, etc.) is added to the Call Stack.
    - After code execution, the Execution Context is removed from the Call Stack in a **Last In, First Out (LIFO)** manner.
    - Example: Imagine a stack of books 📚 where you always remove the topmost book first before moving on to the next.

5. **Call Stack is Also Known As**:
    - Execution Context Stack
    - Program Stack
    - Control Stack
    - Runtime Stack
    - Machine Stack


## 3. Hoisting in JavaScript 🎣

1. **What is Hoisting?** 🚀
    - Hoisting is a JavaScript phenomenon that allows you to access variables and functions even before they are initialized or assigned a value.
    - Example: It's like being able to use a tool in your workshop before officially setting it up—JavaScript knows it exists even if you haven't fully defined it yet.

2. **How Does Hoisting Work?** 🛠️
    - The JavaScript interpreter executes the code in two phases:
      1. **Memory Creation Phase**: 
          - In this phase, variables are assigned `undefined`, and functions are stored in memory as they are.
      2. **Code Execution Phase**:
          - In this phase, the actual code is executed. Variables will still hold `undefined` if they haven't been assigned a value yet, but functions can be invoked as they were stored in full during the Memory Creation phase.
    - Example: Imagine setting up a workspace where all your tools are placed on the table, but their labels (variable values) haven't been written yet. You can still grab the tool (function) and use it because it’s already there, but you don’t know exactly what some tools (variables) are until later.

3. **Refer**:
    - To understand this concept in more detail, refer to the folder named `3.Hoisting`.


## 4. Functions and Execution Context Cleanup 🧹

1. **After Function Execution**:
    - When a function finishes executing, the `Current Execution Context` related to that function is deleted.
    - This means it's removed from both:
      - **Code Component** (where the code runs)
      - **Call Stack** (which keeps track of the order in which functions are called)
    - **Example**: Imagine you're done with a task at work. You clear your desk (delete the Execution Context) and move on to the next task.

2. **After Complete Code Execution**:
    - Once the entire JavaScript code has finished running, the `Global Execution Context` is also deleted.
    - This means it's removed from both:
      - **Code Component**
      - **Call Stack**
    - **Example**: It's like finishing all your work for the day. Once everything is done, you clean up your entire workspace (delete the Global Execution Context) before heading home.

3. **Refer**:
    - To understand this concept in more detail, refer to the folder named `4.Functions`.


## 5. The Shortest JavaScript Program ✨

1. **What is the Shortest JavaScript Program?**:
    - An empty JavaScript file is the shortest possible JavaScript program.
    - **Example**: Just save a `.js` file with no content, and you've got the shortest program!

2. **What Happens Behind the Scenes?** 🔍
    - Even in an empty file, JavaScript creates a `Global Execution Context`.
    - It sets up the memory space and creates the `window` object.

3. **Global Context and `this`**:
    - At the global level, `this === window` evaluates to `true`.
    - **Example**: Think of `this` as a reference to the entire environment you're working in. At the global level, that environment is the `window` object, so `this` points to `window`.

4. **Refer**:
    - To understand this concept in more detail, refer to the folder named `5. Short Program`.


## 6. Undefined vs. Not Defined in JavaScript ❓

1. **Undefined**:
    - **Definition**: `undefined` is a placeholder for variables that have been declared but not yet assigned a value.
    - **Example**: 
      ```javascript
      let x;
      console.log(x); // Output: undefined
      ```
    - **Explanation**: In the code above, `x` is declared but not assigned any value, so it defaults to `undefined`.

2. **Not Defined**:
    - **Definition**: A variable is considered "not defined" if it has not been declared at all.
    - **Example**:
      ```javascript
      console.log(y); // ReferenceError: y is not defined
      ```
    - **Explanation**: Here, `y` is used without being declared, resulting in a `ReferenceError`.

3. **JavaScript's Flexibility**:
    - JavaScript is a loosely typed language, meaning variables are not bound to a specific datatype. 
    - **Example**:
      ```javascript
      let data = "Hello";
      data = 42; // Now, data holds a number
      ```
    - **Explanation**: The same variable `data` can store different types of values, such as a string and then a number.

4. **Best Practices**:
    - Avoid storing `undefined` in variables. It is not considered good practice and can lead to confusion.
    - **Example**:
      ```javascript
      let placeholder = undefined; // Avoid this
      ```
    - **Explanation**: Instead of explicitly setting a variable to `undefined`, it’s better to leave it uninitialized or use `null` to indicate intentional absence of value.

5. **Refer**:
    - To understand this concept in more detail, refer to the folder named `6. Undefined vs Not Defined`.


## 7. Scope Chain & Lexical Environment 🔗

1. **Scope** 🌍:
    - **Definition**: Scope refers to the area in your code where you can access specific variables and functions.
    - **Example**:
      ```javascript
      function example() {
        let x = 10;
        console.log(x); // x is accessible here
      }
      console.log(x); // x is not accessible here (outside its scope)
      ```

2. **Lexical Environment** 📚:
    - **Lexical**: Refers to something being in sequence or hierarchy.
      - **Example**: Function `c()` is lexically inside function `a()`, meaning `c()` is nested within `a()` in the code structure.
    - **Definition**: A Lexical Environment is the local memory of a function, along with a reference to its parent’s Lexical Environment.
      - **Example**:
        1. `c()` has access to its own memory space and the memory space of `a()` (its parent function).
        2. `a()` has access to its own memory space and the global memory.
        3. The global memory has access to its own memory space and the `window` object, but its lexical reference is `null`.

3. **Scope Chain** 🔗:
    - **Definition**: The Scope Chain is the chain of Lexical Environments, each one referring to its parent Lexical Environment, up to the global environment.
    - **Example**:
      ```javascript
      function a() {
        let x = 10;
        function b() {
          let y = 20;
          function c() {
            let z = 30;
            console.log(x, y, z); // c() has access to its own, b()'s, and a()'s scope.
          }
          c();
        }
        b();
      }
      a();
      ```
      - In this example, function `c()` can access variables from its own Lexical Environment, as well as those from `b()` and `a()` due to the Scope Chain.

4. **Refer**:
    - To understand this concept in more detail, refer to the folder named `7. Scope Chain Lexical Environment`.


## 8. ES6 Features: Temporal Dead Zone, `let`, `var`, `const`, and Errors 🛠️

1. **`let` and `const` Declaration in Temporal Dead Zone (TDZ)** 🕒:
    - **Hoisting**: `let` and `const` declarations are hoisted, but unlike `var`, they are not initialized immediately. Instead, they enter the **Temporal Dead Zone (TDZ)**.
    - **Temporal Dead Zone (TDZ)**: 
      - **Definition**: TDZ is the time since when the let variable is hoisted & till it is initialized some value the time between them is known as TDZ.
      - The TDZ is the period between the time when a `let` or `const` variable is hoisted and when it is actually initialized with a value.
      - **Example**:
        ```javascript
        console.log(x); // ReferenceError: Cannot access 'x' before initialization
        let x = 10;
        ```
      - **Explanation**: Here, `x` is in the TDZ from the start of the block until the `let x = 10;` line.

2. **Priority of Declarations** 🎯:
    - **Priority**: 
      1. `const` has the highest priority and must be initialized at the time of declaration.
      2. `let` comes next and can be initialized later, but cannot be accessed before initialization (due to TDZ).
      3. `var` has the lowest priority, is hoisted and initialized with `undefined`, and can be accessed before initialization.

3. **Error Types in JavaScript** ⚠️:
    - **SyntaxError**:
      - **Definition**: Occurs when there is a mistake in the syntax of the code that prevents it from being parsed correctly.
      - **Example**:
        ```javascript
        let 1x = 10; // SyntaxError: Invalid or unexpected token
        ```
    - **ReferenceError**:
      - **Definition**: Occurs when trying to access a variable that is not declared or is still in the TDZ.
      - **Example**:
        ```javascript
        console.log(y); // ReferenceError: y is not defined
        ```
    - **TypeError**:
      - **Definition**: Occurs when a value is not of the expected type.
      - **Example**:
        ```javascript
        let num = 5;
        num.toUpperCase(); // TypeError: num.toUpperCase is not a function
        ```
      - **Explanation**: In this example, `num` is a number, and trying to call `toUpperCase()` (a string method) on it results in a TypeError.


## 9. Blocked Scope & Shadowing in JavaScript 🧱

### 1. Block Scope `{}` 📦
- **Definition**: A block, also known as a **Compound Statement**, is a way to group multiple JavaScript statements together, particularly where JavaScript expects only one statement.
  - **Example**:
    ```javascript
    if (true) {
        console.log('Hello');
        console.log('World');
    }
    ```
  - **Explanation**: Here, the two `console.log` statements are grouped into a block, which is executed as a single unit when the `if` condition is true.

### 2. Block Scope in JavaScript 🚪
- In JavaScript, variables declared with `let` and `const` inside a block `{}` are **block-scoped**. This means they are confined to that block and cannot be accessed outside it.
- **Refer Folder `9. Block`**:
  - **Example**: 
    - Variables `b` and `c` are hoisted in their respective block spaces.
    - Variable `a` is hoisted in the global space.

### 3. Shadowing 👥
- **Definition**: Shadowing occurs when a variable declared inside a block has the same name as a variable declared in an outer scope. The inner variable **shadows** the outer one, meaning the value inside the block takes precedence within that block.
  - **Example**:
    ```javascript
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
    ```
  - **Explanation**: In the example, the `x` inside the block shadows the `x` in the outer scope, but only within the block. Outside the block, the original `x` is still 10.

- **Important Notes**:
  - Shadowing is **not applicable** when using `let` and `const` if they are in the same scope. Attempting to redeclare a `let` or `const` variable within the same scope will result in a `SyntaxError`.
  - **Lexical Scope**: Block scope also follows lexical scoping rules, meaning a block has access to its own memory space and its parent's memory space.
  - `var` is **function-scoped**, meaning it is not confined to block scope but to the function in which it is declared.
  - `let` and `const` are **block-scoped**, meaning they are confined to the block in which they are declared.

4. **Refer**:
    - To understand this concept in more detail, refer to the folder named `9. Block Scope Shadowing`.


## 10. Closures in JavaScript 🔒

### 1. What is a Closure? 🤔
- A **closure** is created when a function is bundled together with its **lexical scope**. This means the function retains access to the variables from its outer scope, even after the outer function has finished executing.
  - **Example**:
    ```javascript
    function outerFunction() {
        let outerVariable = 'I am outside!';

        function innerFunction() {
            console.log(outerVariable);
        }

        return innerFunction;
    }

    const myClosure = outerFunction();
    myClosure(); // Output: 'I am outside!'
    ```
  - **Explanation**: Here, `innerFunction` forms a closure with its surrounding `outerFunction` scope, allowing it to access `outerVariable` even after `outerFunction` has finished executing.

### 2. Uses of Closures in JavaScript 🛠️

1. **Module Design Pattern**:
   - Closures are commonly used to implement the module pattern, where we can create private variables and functions that are not accessible from outside the module.

2. **Currying**:
   - Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Closures help in retaining access to the arguments.

3. **Functions like `once`**:
   - Closures can be used to create functions that execute only once. After the first call, subsequent calls will return the first result.

4. **Memoization**:
   - Closures are used in memoization, a technique to cache results of expensive function calls and reuse them when the same inputs occur again, improving performance.

5. **Maintaining State in Asynchronous World**:
   - Closures help in maintaining state between asynchronous operations, allowing the function to remember the state it was in when it was invoked.

6. **`setTimeout` and Asynchronous Operations**:
   - Closures are essential when using `setTimeout` or other asynchronous operations, as they allow the callback function to retain access to the variables in its outer scope even after a delay.

7. **Iterators**:
   - Closures play a role in creating iterators, which are objects that allow you to traverse through data step by step while retaining the state between iterations.

8. **And Many More...**:
   - Closures are a fundamental concept in JavaScript and are used in a wide range of scenarios, from creating private variables to implementing advanced design patterns.

#### 3. **Refer**:
    - To understand this concept in more detail, refer to the folder named `10. Closures `.


## 11.Function Types in JavaScript 🔄

### 1. Function Statement vs Function Expression ⚖️

- **Function Statement** (also known as Function Declaration):
  - A function statement is **hoisted**, meaning it can be invoked before the function declaration appears in the code.
  - **Example**:
    ```javascript
    function sayHello() {
        console.log('Hello');
    }
    sayHello(); // Output: Hello
    ```

- **Function Expression**:
  - A function expression is **not hoisted**. If you try to invoke it before its declaration, it will throw an error.
  - **Example**:
    ```javascript
    var sayHello = function() {
        console.log('Hello');
    }
    sayHello(); // Output: Hello

    sayHello(); 
    // Trying to invoke before the declaration would cause: 
    // Uncaught TypeError: sayHello is not a function
    ```

### 2. Anonymous Function 🤐
- A function **without a name** is called an anonymous function. It is often used where functions are treated as values.
- **Example**:
    ```javascript
    let greet = function() {
        console.log('Hello World');
    };
    greet(); // Output: Hello World
    ```

### 3. Named Function Expression 🏷️
- A **named function expression** is a function expression where the function has a name. This name is only accessible within the function itself.
  - **Example**:
    ```javascript
    var x = function xyz() {
        console.log(xyz); // Prints the function itself
    }
    x();   // Works fine
    xyz(); // Error: xyz is not defined
    ```

### 4. Parameters vs Arguments 🔄
- **Parameters**: The variables defined when declaring a function.
- **Arguments**: The actual values passed when invoking the function.
  - **Example**:
    ```javascript
    function add(a, b) {  // a, b are parameters
        return a + b;
    }
    add(2, 3);  // 2, 3 are arguments
    ```

### 5. First Class Function / First Class Citizen 🥇
- In JavaScript, functions are **first-class citizens**. This means they can be treated like any other value, allowing them to:
  - Be **passed** as arguments to other functions.
  - Be **returned** from functions.
  - Be **assigned** to variables.
  - **Example**:
    ```javascript
    function greet() {
        return function() {
            console.log('Hello from inside!');
        };
    }
    let innerGreet = greet();
    innerGreet(); // Output: Hello from inside!
    ```

### 4. Refer:
    - To understand this concept in more detail, refer to the folder named `11. Functions Type`.


## 12. Callback Functions 🔁

### 1. What is a Callback Function? 🤔
- A **callback function** is a function that is **passed as an argument** to another function.
- It allows the receiving function to control **when to execute** the callback function.
- This is especially useful in asynchronous programming, where certain tasks need to happen **after** something else has finished.

    **Daily Life Example**:  
    Think of a callback as setting an alarm ⏰.  
    - You set an alarm (callback function) for 7 AM and go to sleep.
    - When the clock hits 7 AM, the alarm goes off (another function executes the callback).

    **Code Example**:
    ```javascript
    function wakeUp(alarm, callback) {
        console.log('Alarm is set at ' + alarm);
        callback(); // Invoking the callback function
    }

    function ringAlarm() {
        console.log('The alarm is ringing! ⏰');
    }

    wakeUp('7 AM', ringAlarm);
    // Output: 
    // Alarm is set at 7 AM
    // The alarm is ringing! ⏰
    ```

### 2. The Callstack 📚
- Everything in JavaScript is executed through the **callstack**.
- The callstack manages function calls and executes them in a **Last In, First Out (LIFO)** order.
- It’s also known as the **main thread of execution** because all JavaScript code is executed **synchronously** by default.

    **Code Example**:
    ```javascript
    function firstTask() {
        console.log('First Task');
    }

    function secondTask() {
        console.log('Second Task');
    }

    firstTask();
    secondTask();
    
    // Output:
    // First Task
    // Second Task
    ```

### 3. Blocking the Callstack 🚨
- **Blocking the callstack** means stopping other code from running until a long-running function finishes execution.
- This can happen if a function takes too much time to execute (e.g., 25-30 seconds). While it's running, **no other code** can execute, which causes the browser to **freeze** or become **unresponsive**.
- This is known as **blocking the main thread**.

    **Daily Life Example**:  
    Imagine waiting in line at a coffee shop ☕, but the person ahead of you is taking forever to order! Until they finish, you can't place your order (callstack is blocked).

    **How to Avoid Blocking**: Use **asynchronous operations** such as `setTimeout`, **Promises**, or `async/await` to allow other code to run without waiting for the slow task to finish.

    **Code Example**:
    ```javascript
    function longTask() {
        // Simulating a task that takes 5 seconds to complete
        let startTime = Date.now();
        while (Date.now() - startTime < 5000) {
            // Task runs for 5 seconds
        }
        console.log('Task Complete!');
    }

    console.log('Start');
    longTask(); // Blocks the callstack for 5 seconds
    console.log('End');

    // Output:
    // Start
    // Task Complete!
    // End
    ```

    In this example, the callstack is blocked for 5 seconds, preventing the code after `longTask()` from executing.

### 4. Asynchronous Callbacks 🚀
- To avoid blocking the callstack, we can use asynchronous callbacks, allowing other code to run while waiting for a task to complete.
- Example of using `setTimeout` to execute a task **after a delay** without blocking the callstack:

    ```javascript
    console.log('Start');

    setTimeout(() => {
        console.log('Task Complete after 3 seconds!');
    }, 3000); // Task runs after 3 seconds, but other code can execute in the meantime

    console.log('End');

    // Output:
    // Start
    // End
    // Task Complete after 3 seconds!
    ```

    Here, `setTimeout` is an example of a **non-blocking operation**, allowing other code (`console.log('End')`) to run while waiting for 3 seconds.

---

**Refer folder 12. Callback Functions**


#
➡️ <font color="red"><i>Remaining notes will be uploaded every day.</i></font>
