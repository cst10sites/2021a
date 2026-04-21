function clickedSubmit() {

var subTotal = document.getElementById("SubTotal").value;
var tipTotal = document.getElementById("tip").value;
var splitTotal = document.getElementById("split").value;

	if (subTotal == '') {
		alert("Please enter a subtotal for your meal");	
	}
	
	else {
		document.getElementById("breakdown").innerHTML = "Breakdown ";
		document.getElementById("subtotal").innerHTML = "Subtotal: " + (Math.round(subTotal * 100 ) / 100);
		if (!isNaN(parseFloat(subTotal))) {
			document.getElementById("tax").innerHTML = "Tax: " + (Math.round(subTotal * 0.05 * 100) / 100);
			subTotal = (parseFloat(subTotal) + (Math.round(subTotal * 0.05 * 100) / 100));
			document.getElementById("total").innerHTML = "Total after tax: " + (subTotal);
			document.getElementById("Tip").innerHTML = "Amount of tip: " + (Math.round(subTotal * tipTotal * 100) / 100);
			document.getElementById("grandtotal").innerHTML = "Total Price (before split): " + ((Math.round((subTotal + subTotal * tipTotal) * 100)) / 100);
			document.getElementById("Split").innerHTML = "Total Price (after split): " + (Math.round(((subTotal + subTotal * tipTotal) / splitTotal) * 100) / 100);
		}
		else {
			alert("Please enter an ACTUAL subtotal.");
		}
	}
}