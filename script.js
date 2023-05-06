let result = document.getElementById('result');

function insert(value) {
	result.value += value;
}

function clearInput() {
	result.value = '';
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (e) {
		if (e instanceof SyntaxError) {
			result.value = 'Syntax Error';
		}
	}
}
