var print = 0;
var first = 0;
var next = 1;

function calc() {
	if (print == 0) {
		document.getElementById("calculate").innerHTML = ("beforeend", + print);  //prints seq number, 0 1 1 2 3 5
	}
	else {
	document.getElementById("calculate").insertAdjacentHTML("beforeend", ", " + print);  //prints seq number, 0 1 1 2 3 5
	}
	first = (next);  //sets varFirst to next number, 1 0 1 1 2
	next = (print); //sets varNext to next number, 0 1 1 2 3
	print = (first + next);  //sets varPrint to next number, 1 1 2 3 5
}