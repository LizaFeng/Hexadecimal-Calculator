import { useState } from "react";
import chooseOp from "./operations";
import "../styles/App.css"


function App() {
  const [calc, setCalc] = useState("");

  const ops = ['/', '*', '+', '-'];

  let equived = false;

  const numdigits = [
    ["0", "1", "2", "3"],
    ["4", "5", "6", "7"],
    ["8", "9", "A", "B"],
    ["C", "D", "E", "F"],
  ]

  const updateCalc = value => {

    if (ops.includes(value) && calc === '') {
      alert("You cannot start the expression with an operator");
      return;
    }
    else if (ops.includes(value) && ops.includes(calc.slice(-1))) {
      alert("You cannot have multiple operators in a row");
      return clear();
    }

    if ((calc.charAt(calc.length - 1) === "/") && (value === "0")) {
      alert("Can't divide zero by zero!");
      return clear();
    }

    if (equived == false) {
      value = calc + value;
    }

    setCalc(value);


    if (value.length > 28) {
      alert("Too many characters");
      return clear();
    }
  };

  //This is for the equal sign
  const calculate = () => {
    let tempNums = calc.split(/[^A-Za-z0-9]/);
    //index 0 and -1 gives empty space
    let tempOps = calc.split(/[A-Za-z0-9]/);
    var ans = 0;
    //now change the hexadecimal to decimal form and calculate
    for (let i = 0; i < tempNums.length; i++) {
      if (i === 0) {
        ans = chooseOp(parseInt(tempNums[0], 16), tempNums[1], tempOps[1]);
        i++;
      }
      else {
        ans += chooseOp(ans, tempNums[i], tempOps[i]);

      }
    }
    clear();
    setCalc(ans.toString(16));

    equived = true;
    updateCalc(ans);

  };

  const clear = () => {
    if (calc === "") {
      return;
    }

    setCalc("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="outputScreen">
          {calc ? calc : "0"}
        </div>
        <div className="operators">
          {ops.map((op, index) => (
            <button className="opKeys" key={index} onClick={() => updateCalc(op)}>{op}</button>
          ))}
          <button onClick={clear}>Clear</button>
        </div>

        <div className="digits">
          {numdigits.flat().map((dig, index) => (
            <button className="numKeys" key={index} onClick={() => updateCalc(dig)}>{dig}</button>
          ))}
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;



