**# Time, Tide & JavaScript Waits for None ⏳**
## JavaScript Execution Context 🌐

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
