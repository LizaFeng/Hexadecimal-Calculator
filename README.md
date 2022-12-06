# Hexadecimal-Calculator
A simple hexadecimal calculator that was built using the useState hook from Reactjs.
The calculator does operations from left to right regardless of operation).

Calculator Buttons & UI
- There are buttons 0 - F for hexadecimal value input. 
- The arithmetic operations supported by the calculator are the following: "+", "-", "*", and  "/".
- There is a "clear" button and a "=" button.

Calculator Input State Functionality
- The calculator starts at value 0 (AKA the initial state is 0)
- Users are able to see the hexadecimal value input as well as the operation input on the calculator's screen after pressing a button
- The calculator handles input for multiple operations. 
- The "clear" button will clear the calculator screen when pressed.
- The "=" will evaluate the expression on the calculator screen when pressed.

Error Handling Input State
- The user would be prevented from dividing a number by zero.
- There is a cap for the amount of characters that the user could enter to the calculator.
