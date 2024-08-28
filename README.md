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



#
➡️ <font color="red"><i>Remaining notes will be uploaded every day.</i></font>
