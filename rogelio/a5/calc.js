function clickedSubmit() {
	var sub = document.getElementById("subtotal").value;
	var tip = document.getElementById("service").value;
	var split = document.getElementById("people").value;

	if (sub == "") {
		alert("Enter amount needed to pay");
	}
	else {
		if (sub < 0) {
			alert("Enter a positive number");
		}
		else {
			if (tip == "") {
				alert("Enter how good the service was");
			}
			else {
				if (split == "") {
					alert("Enter how many people are splitting the bill")
				}
				else {
					if (split == "0") {
						var e = (Math.round(((parseFloat(sub) * 1.05) + (parseFloat(sub) * (parseInt(tip) / 100))) * 100) / 100).toFixed(2);
						alert("Dine and dashing is bad and you could get arrested.");
						alert("But, I mean");
						alert("Good job, you just saved $" + e + " !");
					}
					else {
						var a = (Math.round(sub * 100) /100).toFixed(2);
						var b = (Math.round((parseFloat(sub) * 0.05) * 100) / 100).toFixed(2);
						var c = (Math.round((parseFloat(sub) * 1.05) * 100) / 100).toFixed(2);
						var d = (Math.round((parseFloat(sub) * parseInt(tip) * .01) * 100) / 100).toFixed(2);
						var e = (Math.round(((parseFloat(sub) * 1.05) + (parseFloat(sub) * (parseInt(tip) / 100))) * 100) / 100).toFixed(2);
						var f = (Math.round((((parseFloat(sub) * 1.05) + (parseFloat(sub) * (parseInt(tip) / 100))) / parseInt(split)) * 100) / 100).toFixed(2);
						document.getElementById("receiptSub").innerHTML = ("Subtotal: $" + a);
						document.getElementById("receiptGstP").innerHTML = ("GST percentage: 5%")
						document.getElementById("receiptGst").innerHTML = ("GST: $" + b);
						document.getElementById("receiptBefore").innerHTML = ("Total before tip: $" + c);
						document.getElementById("receiptTipP").innerHTML = ("Tip percentage: " + tip + "%")
						document.getElementById("receiptTip").innerHTML = ("Tip: $" + d);
						document.getElementById("receiptGrand").innerHTML = ("Grand Total: $" + e);
						document.getElementById("receiptSplit").innerHTML = ("Total per person: $" + f);
					}
				}
			}
		}
	}	
}
function closeReceipt() {
	document.getElementById("receiptSub").innerHTML = ("");
	document.getElementById("receiptGstP").innerHTML = ("");
	document.getElementById("receiptGst").innerHTML = ("");
	document.getElementById("receiptBefore").innerHTML = ("");
	document.getElementById("receiptTipP").innerHTML = ("")
	document.getElementById("receiptTip").innerHTML = ("");
	document.getElementById("receiptGrand").innerHTML = ("");
	document.getElementById("receiptSplit").innerHTML = ("");
}