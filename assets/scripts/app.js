let currentName = "Divyanshu";
let log = [];
const defaultResult =0;
let currentResult = defaultResult;

// get input values
function getUserNumberInput() {
    return parseInt(userInput.value);
  } 

// Generate result
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult) {
    const logEntry = { operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };

    log.push(logEntry);
    console.log(log);
  }



// Adding
function add() {
  // currentResult = currentResult + parseInt(userInput.value); Parse way
  //   currentResult = currentResult + +userInput.value; // other way
  //   outputResult(currentResult, '');

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// Subtracting
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  console.log("1");
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

 
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// Section 2 Assignment
// function subtract(n1,n2){
//     return n1-n2;
//     alert("1"); // It wont work
// }
function stringify(n1) {
  return `Result: ${n1}`;
}

