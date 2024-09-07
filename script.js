function add(num1, num2) {
	return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
	return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
	return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
	return parseInt(num1) / parseInt(num2);
}

function operate(operator, num1, num2) {
	if (operator == "+") {
		return add(num1, num2);
	} else if (operator == "-") {
		return subtract(num1, num2);
	} else if (operator == "*") {
		return multiply(num1, num2);
	} else if (operator == "/") {
		return divide(num1, num2);
	}
}

let num = "", mathOperator = "";


const calculator = document.querySelector("#calculator");

const display = document.createElement("div");
display.id = "display";

const displayInput = document.createElement("div");
displayInput.id = "displayInput";

const displayNumber = document.createElement("p");
displayNumber.id = "displayNumber";
displayNumber.textContent = "";
displayInput.appendChild(displayNumber);

const displayOperator = document.createElement("p");
displayOperator.id = "displayOperator";
displayOperator.textContent = "";
displayInput.appendChild(displayOperator);

display.appendChild(displayInput);

const displayResult = document.createElement("p");
displayResult.id = "displayResult";
display.appendChild(displayResult);

calculator.appendChild(display);

const buttons = document.createElement("div");
buttons.id = "buttons";
calculator.appendChild(buttons);

const digits = document.createElement("div");
digits.id = "digits";
buttons.appendChild(digits);

const operators = document.createElement("div");
operators.id = "operators";
buttons.appendChild(operators);

for (let i = 9; i >= 0; i--) {
	const digit = document.createElement("button");
	digit.textContent = i;
	digit.classList.add("digit");
	digit.addEventListener("click", () =>{
		displayNumber.textContent += digit.textContent;
	});
	digits.appendChild(digit);
}

const operatorList = [
	{
		sign: '/',
		id: 'divide'
	},
	{
		sign: '*',
		id: 'multiply'
	},
	{
		sign: '-',
		id: 'subtract'
	},
	{
		sign: '+',
		id: 'add'
	},
	{
		sign: '=',
		id: 'equals'
	},
	{
		sign: 'C',
		id: 'clear'
	}
]


function clear() {
	num = "";
	mathOperator = "";
	displayNumber.textContent = "";
	displayOperator.textContent = "";
	displayResult.textContent = "";
}

function showNum() {
	displayResult.textContent = num;
	displayNumber.textContent = "";
}


operatorList.forEach(element => {
	const operator = document.createElement("button");
	operator.textContent = element.sign;
	operator.id = element.id;
	operator.classList.add("operator");
	operator.addEventListener("click", () =>{
		if (operator.id == "clear") {
			clear();
		} else if (operator.id == "equals") {
			if (num == "") {
				if (displayNumber.textContent == "") {
					clear();
				} else {
					num = displayNumber.textContent;
					showNum();
					displayOperator.textContent = "";
				}
			} else if (mathOperator == "") {
				if (displayOperator.textContent == "") {
					if (displayNumber.textContent == "") {
						showNum();
					} else {
						num = displayNumber.textContent;
						showNum();
					}
				} else {
					if (displayNumber.textContent == "") {
						showNum();
						displayOperator.textContent = "";
					} else {
						num = operate(displayOperator.textContent, num, displayNumber.textContent);
						showNum();
						displayOperator.textContent = "";
					}
				}
			} else {
				if (displayNumber.textContent == "") {
					showNum();
					displayOperator.textContent = "";
					mathOperator = "";
				} else {
					num = operate(mathOperator, num, displayNumber.textContent);
					showNum();
					displayNumber.textContent = "";
					displayOperator.textContent = "";
					mathOperator = "";
				}
			}
		} else {
			displayOperator.textContent = operator.textContent;
			if (num == "") {
				if (displayNumber.textContent == "") {
					clear();
				} else {
					num = displayNumber.textContent;
					showNum();
					mathOperator = operator.textContent;
				}
			} else {
				if (displayNumber.textContent == "") {
					mathOperator == operator.textContent;
				} else if (mathOperator == "") {
					num = displayNumber.textContent;
					mathOperator = operator.textContent;
					showNum();
				} else {
					num = operate(mathOperator, num, displayNumber.textContent);
					showNum();
					mathOperator = operator.textContent;
				}
			}
		}
	});
	operators.appendChild(operator);
});
