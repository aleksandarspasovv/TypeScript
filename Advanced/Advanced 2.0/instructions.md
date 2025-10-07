 How to Run TypeScript in Visual Studio Code

This document provides the steps to set up and run TypeScript code in Visual Studio Code (VS Code).

---

### 1. **Install Node.js and npm**

Make sure you have Node.js and npm (Node Package Manager) installed.

- Download and install from [Node.js](https://nodejs.org/).
- After installation, verify by running the following commands in your terminal:
  ```bash
  node -v
  npm -v
2. Install TypeScript Globally
Install TypeScript globally using npm:

bash
Copy code
npm install -g typescript
Verify installation:

bash
Copy code
tsc -v
3. Initialize Your Project Folder
Create a folder for your project (if not already done) and open it in VS Code (File -> Open Folder).

Open the terminal inside VS Code and run the following command to initialize your project:

bash
Copy code
npm init -y
4. Create a TypeScript Configuration File
In the terminal, run:

bash
Copy code
tsc --init
This will generate a tsconfig.json file with default TypeScript settings.

5. Create a TypeScript File
Create a new file with a .ts extension (e.g., test.ts).

Add your TypeScript code to this file (e.g., the code for counting occurrences).

6. Navigate to the Correct Directory
If your test.ts is in a specific folder, navigate to that folder in your terminal:

bash
Copy code
cd "C:\Users\Hater\Documents\GitHub\TypeScript\Advanced\Advanced 2.0"
7. Compile the TypeScript File
Run the TypeScript compiler to compile your .ts file into a .js file:

bash
Copy code
tsc test.ts
8. Run the Compiled JavaScript File
After compiling, run the generated test.js using Node.js:

bash
Copy code
node test.js
You should see the output of any console.log statements from your TypeScript code in the terminal.

Optional: Use ts-node for Direct Execution
If you don’t want to manually compile with tsc every time, you can use ts-node to run TypeScript files directly.

Install ts-node globally:

bash
Copy code
npm install -g ts-node
Run the TypeScript file directly using ts-node:

bash
Copy code
ts-node test.ts
This will run your TypeScript code directly and show the console.log output.

Summary of Key Commands:
Navigate to directory:

bash
Copy code
cd "C:\Users\Hater\Documents\GitHub\TypeScript\Advanced\Advanced 2.0"
Compile TypeScript file:

bash
Copy code
tsc test.ts
Run compiled JavaScript file:

bash
Copy code
node test.js
Alternatively, run TypeScript directly using ts-node:

bash
Copy code
ts-node test.ts
This should cover all the steps to run your TypeScript code in VS Code. Let me know if you need further assistance!

yaml
Copy code

---

### 4. **Save and View the Instructions in VS Code**

- After pasting the content into the file, **save** it (Ctrl + S or Cmd + S).
- You can now view these instructions directly within **VS Code**.

This `.md` file provides clear and structured steps to set up and run TypeScript code, and it can be easily opened, read, and edited in Visual Studio Code.