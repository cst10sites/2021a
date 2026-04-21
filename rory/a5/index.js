function clickedSubmit() {
	

	var sub = document.getElementById("subTotal").value;
	var amount = document.getElementById("tip").value;
	var num = document.getElementById("personAmt").value;

	if (sub == "") {
		alert("Please enter more information!");
	}
	else if (sub < 0) {
		alert("Pease enter a positive number in the subtotal!");
	}
	else if (amount == "") {
		alert("Please enter More information!");
	}
	else if (num == "") {
		alert("Please enter how many people you are eating with!");
	}
	else {
		var a = (Math.round(sub * 100) /100).toFixed(2);
		var b = (Math.round((parseFloat(sub) * 0.05) * 100) / 100).toFixed(2);
		var c = (Math.round((parseFloat(sub) * 1.05) * 100) / 100).toFixed(2);
		var d = (Math.round((parseFloat(sub) * parseInt(amount) * 0.01) * 100) / 100).toFixed(2);
		var e = (Math.round(((parseFloat(sub) * 1.05) + (parseFloat(sub) * (parseInt(amount) / 100))) * 100) / 100).toFixed(2);
		var f = (Math.round((((parseFloat(sub) * 1.05) + (parseFloat(sub) * (parseInt(amount) / 100))) / parseInt(num)) * 100) / 100).toFixed(2);
						
						
		document.getElementById("billSub").innerHTML = ("Subtotal: $" + a);
		document.getElementById("billGst").innerHTML = ("Total GST: $" + b);
		document.getElementById("billTipB").innerHTML = ("Total Before The Tip: $" + c);			
		document.getElementById("billTipAmt").innerHTML = ("Tip Amount: $" + d);
		document.getElementById("billTtl").innerHTML = ("Grand Total: $" + e);
		document.getElementById("billSplit").innerHTML = ("Amount Paid Per Person: $" + f);
	}	

}

function resetBill() {
			document.getElementById("billSub").innerHTML = ("");
			document.getElementById("billGst").innerHTML = ("");
			document.getElementById("billTipB").innerHTML = ("");
			document.getElementById("billTipAmt").innerHTML = ("");
			document.getElementById("billTtl").innerHTML = ("");
			document.getElementById("billSplit").innerHTML = ("");
}	