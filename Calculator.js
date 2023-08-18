const sum = (firstNumber,secondNumber) => {
    return firstNumber + secondNumber
}

const subtract = (firstNumber,secondNumber) => {
    return firstNumber - secondNumber
}

const multiply = (firstNumber,secondNumber) => {
    return firstNumber * secondNumber
}

const divide = (firstNumber,secondNumber) => {
    return firstNumber / secondNumber
}

// const firstNumber = 1
//  const operator = "*"
// const secondNumber = 4

// console.log(firstNumber)
// console.log(operator)
// console.log(secondNumber)


    let firstNumber;
    let operator; 
    let secondNumber;
    let result;
 switch (operator) {
     case '+' :
         result = firstNumber + secondNumber
         break;

     case '-' :
         result = firstNumber - secondNumber
         break;

     case '*' :
         result = firstNumber * secondNumber
         break;
        
     case '/' :
         result = firstNumber / secondNumber
         break;

     default : 
         console.log('error')
 }

 console.log(result)

 function appendToDisplay(value) {
    document.getElementById('display').value += value;
}



function clearDisplay() {
    document.getElementById('display').value = "";
}




