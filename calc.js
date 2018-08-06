function addoperations() {
	switch (operation) {
		case "+":
			resultt = number1 + number2;
			break;
		case "-":
			resultt = number1 - number2;
			break;
		case "*":
			resultt = number1 * number2;
			break;
		case "/":
			resultt = number1 / number2;
			break;
	}
	return resultt;
}

var number1 = 0;
var number2 = 0;
var operation = "+";
var resultt;
var currentNumber = 0;
var dec = document.getElementsByClassName("zapirka");
var screen = document.getElementById("result");
var numbers = document.querySelectorAll(".num");

// kopcinjata so brojki

function numbs(brojkite) {
	for (var i = 0; i < brojkite.length; i++) {
		(function () {
			brojkite[i].addEventListener("click", function () {
				if (currentNumber == 0) {
					currentNumber = this.value;
					screen.innerHTML = currentNumber;

				} else {
					currentNumber += this.value;
					screen.innerHTML = currentNumber;
				}
			});
		})();
	}
}
numbs(numbers);

// operaciiite + - * /

var operations = document.querySelectorAll(".oper");

function operacii(operaciite) {

	for (var i = 0; i < operaciite.length; i++) {
		(function () {
			operaciite[i].addEventListener("click", function () {
				if (currentNumber == 0) {
					currentNumber = "0";
					//	operation = "+";
					//	currentNumber = 0;
					//	screen.innerHTML = this.value;
				} else if (number1 === 0) {
					number1 = parseInt(currentNumber);
					operation = this.value;
					currentNumber = 0;
					screen.innerHTML = this.value;
				} else {
					//		currentNumber = 0;
					number2 = parseInt(currentNumber);
					addoperations();
					number1 = resultt;
					operation = this.value;
					currentNumber = 0;
					screen.innerHTML = this.value;
				}
			});
		})();
	}
}

operacii(operations);

// zbirot na brojkite ednakvo kopce

var calculateSumButton = document.getElementsByClassName("ednakvo")[0];
calculateSumButton.addEventListener("click", function () {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else if (number1 == 0) {
		number1 = parseInt(screen.innerHTML);
		//currentNumber = parseInt(screen.innerHTML);
	} else {
		number2 = parseInt(screen.innerHTML);
		var resultToPrint = addoperations();
		//	number2 = currentNumber;
		screen.innerHTML = resultToPrint;
		//	number1 = 0;
		//	number2 = 0;
		//	currentNumber = 0;
		//	resultt = 0;
	}
});
// za decimali

function decimali(dec) {
	for (var i = 0; i < screen.value.length; i++) {
		if (screen.value.charAt(i) == ".") {
			return;
		}
	}
	screen.value += dec;
}


// C kopceto za brishenje


var cButton = document.getElementsByClassName("brisi")[0];
cButton.addEventListener("click", function () {

	resultt = 0;
	number1 = 0;
	number2 = 0;
	currentNumber = 0;
	screen.innerHTML = 0;
}
)
