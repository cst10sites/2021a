function clickedSubmit() {
	var subTotal = document.getElementById("SubTotal").value;
    var tipPercentage = document.getElementById("tipPercentage").value;
	var splitAmount = document.getElementById("split").value;
	
	
	if (subTotal == "") {
	
		alert("Please input your subtotal");
	}
	else {
		
		document.getElementById("breakdownB").innerHTML = "Breakdown";
		document.getElementById("subtotalB").innerHTML = "Subtotal: $"+(Math.round(subTotal * 100) /100)
		
		if (!isNaN(parseFloat(subTotal))) {
            document.getElementById("taxB").innerHTML = "Tax: $" + (Math.round(subTotal * 0.05 * 100) / 100);
            subTotal = (parseFloat(subTotal) + (Math.round(subTotal * 0.05 * 100) / 100));
            document.getElementById("totalB").innerHTML = "Total after tax: " + (subTotal);
            document.getElementById("TipB").innerHTML = "Amount of tip: $" + (Math.round(subTotal * tipPercentage * 100) / 100);
            document.getElementById("grandtotalB").innerHTML = "Grandtotal (before split): $" + (Math.round((subTotal + subTotal * tipPercentage) * 100) / 100);
            document.getElementById("SplitB").innerHTML = "Price Per Person: $" + (Math.round(((subTotal + subTotal * tipPercentage) / splitAmount) * 100) / 100);
        }
		
		
	}

	
}