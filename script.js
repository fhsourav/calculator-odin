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

const calculator = document.querySelector("#calculator");

const display = document.createElement("div");
display.id = "display";

const displayNumber = document.createElement("p");
displayNumber.id = "displayNumber";
display.appendChild(displayNumber);

const displayOperator = document.createElement("p");
displayOperator.id = "displayOperator";
display.appendChild(displayOperator);

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

operatorList.forEach(element => {
	const operator = document.createElement("button");
	operator.textContent = element.sign;
	operator.id = element.id;
	operator.classList.add("operator");
	operator.addEventListener("click", () =>{
		displayOperator.textContent = operator.textContent;
	});
	operators.appendChild(operator);
});
