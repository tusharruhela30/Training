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

  // Getting the result
  function result(calculationType) {
    const enteredNumber = getUserNumberInput();
    if ( calculationType !== 'ADD' &&  calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE' || !enteredNumber) {
      return;
    }
    
    const initialResult = currentResult;
    let operator;
    if (calculationType === 'ADD') {  currentResult += enteredNumber;
      operator = '+';
    } else if (calculationType === 'SUBTRACT') {  currentResult -= enteredNumber;
      operator = '-';
    } else if (calculationType === 'MULTIPLY') { currentResult *= enteredNumber;
      operator = '*';
    } else if (calculationType === 'DIVIDE') { currentResult /= enteredNumber;
      operator = '/';
    }
  
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
  
// Adding
function add() { result('ADD'); }

// Subtracting
function subtract() { result('SUBTRACT') }

function multiply() { result('MULTIPLY') }

function divide() { result('DIVIDE') }

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

