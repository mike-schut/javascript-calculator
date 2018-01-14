
const app = document.querySelector('#app');
const output = app.querySelector('#output');
const input = app.querySelector('#inputs');
const button = app.querySelector('button');
let inputOne = output.value;
let operator;
let inputTwo;


input.addEventListener('click', _button_clicked);


function _button_clicked() {

	if(event.target.type == 'submit'){
		
		var buttonValue = event.target.textContent;

		switch(event.target.textContent) {
		    case '+':
		        _add();
		        break;
		    case '-':
		        _subtract();
		        break;
		    case 'X':
		        _multiply();
		        break;
		    case '/':
		        _divide();
		        break;
		    case 'C':
		        _clear();
		        break;
		    case '=':
		        _equals();
		        break;
		    case '%':
		        _percent();
		        break;
		    case '+/-':
		        _opposite();
		        break;

		    default:
			    if(operator) {

			    	if(inputTwo){
			    		output.value = output.value + event.target.textContent;
			    	} else {
			    		output.value = event.target.textContent;
			    	}

			    	inputTwo = output.value;

			    } else if(output.value != 0){
			        output.value = output.value + event.target.textContent;
			        inputOne = output.value;
			    } else {
			    	output.value = event.target.textContent;
			    	inputOne = output.value;
			    }

		}

	}

}

function _const() {
	output.value = inputOne + operator + inputTwo;
}

function _clear() {
	output.value = 0;
	inputOne = 0;
	inputTwo = 0;
	operator = 0;
}

function _add() {
	if(operator){
		_equals();
	}
	operator = '+';
	console.log(operator);
}

function _subtract() {
	if(operator){
		_equals();
	}
	operator = '-';
}

function _multiply() {
	if(operator){
		_equals();
	}
	operator = '*';
}

function _divide() {
	if(operator){
		_equals();
	}
	operator = '/';
}

function _percent() {
	let newValue = parseFloat(output.value) / 100;

	if(operator){
		inputTwo = newValue;
	} else {
		inputOne = newValue;
	}
	output.value = newValue;
}

function _opposite() {
	let newValue = parseFloat(output.value) * -1;

	if(operator){
		inputTwo = newValue;
	} else {
		inputOne = newValue;
	}
	output.value = newValue;
}

function _equals() {

	output.value = (operator === '+' ? parseFloat(inputOne) + parseFloat(inputTwo) : output.value);
	output.value = (operator === '-' ? parseFloat(inputOne) - parseFloat(inputTwo) : output.value);
	output.value = (operator === '*' ? parseFloat(inputOne) * parseFloat(inputTwo) : output.value);
	output.value = (operator === '/' ? parseFloat(inputOne) / parseFloat(inputTwo) : output.value);

	inputOne = output.value;
	inputTwo = 0;
	operator = 0;

}

/*
input1 operator input2 output
*/