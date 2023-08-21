class Calculator {
    constructor(inputButton, outputButton)  {       // storing the data that you will display
        this.inputButton = inputButton
        this.outputButton = outputButton
        this.clear()
    } 


    clear() {
        this.outputDisplay = ''
        this.inputDisplay = '0'
        this.operation = undefined

    }

    displayNumber(number) {
        this.outputDisplay = this.outputDisplay.toString() + number.toString()

    }

    chosseOperation(operation) {
        if(this.outputDisplay === '') return
        if(this.inputDisplay !== '') {
            this.calculate ()
        }
        this.operation = operation
        this.inputDisplay = this.outputDisplay
        this.outputDisplay = ''


    }

    calculate() {
        let result
        const input = parseFloat(this.inputDisplay)
        const out = parseFloat(this.outputDisplay)
        if(isNaN(input) || isNaN(out)) return
        switch (this.operation) {
            case '+' :
                result = input + out
                break

            case '-' :
                result = input - out
                break

            case '*' :
                result = input * out
                break

            case '/' :
                if(out !== 0) {
                    result = input / out
                } else {
                    alert("Can't divide by zero")
                    this.clear()
                    return
                }
                break
            default:
                return
        }


        this.outputDisplay = result
        this.operation = undefined
        this.inputDisplay = ''
    }

    updateDisplay() {
        this.outputButton.innerText = this.outputDisplay
        if(this.operation != null) {
            this.inputButton.innerText = `${this.inputDisplay} ${this.operation}`
        } else (
            this.inputButton.innerText = ''
        )
    }
}




const numberButtons = document.querySelectorAll('[data-number]') // get all the number buttons
const operationButtons = document.querySelectorAll('[data-operation]') //get all the operations

const clearButton = document.querySelector('[data-clear]') //get clear button
const equalsButton = document.querySelector('[data-equals]') // get equals button

const inputButton = document.querySelector('[data-input]') // get input element
const outputButton = document.querySelector('[data-output]') // get get output element

const calculator = new Calculator(inputButton, outputButton)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {               //to display numbers on the calculator
        calculator.displayNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {               //to display numbers on the calculator
        calculator.chosseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


equalsButton.addEventListener('click', button => {
        calculator.calculate()
        calculator.updateDisplay()
})


clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
