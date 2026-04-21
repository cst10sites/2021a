function clickedSubmit() {
	var sub = parseFloat(document.getElementById("subtotal").value);
	var split = parseInt(document.getElementById("people").value);
	
	var tipPercent = -1;
	if (document.getElementById("tip1").checked) {
		tipPercent = document.getElementById("tip1").value;
	} else if (tip = document.getElementById("tip2").checked ) {
		tipPercent = document.getElementById("tip2").value;
	} else if (tip = document.getElementById("tip3").checked ) {
		tipPercent = document.getElementById("tip3").value;
	} else if (tip = document.getElementById("tip4").checked ) {
		tipPercent = document.getElementById("tip4").value;
	}

	if (isNaN(sub)) {
		alert("How much money?");
	} else {
		if (sub < 0) {
			alert("very funny");
		} else if (tipPercent == -1) {
			alert("How good was the service?");
		} else {
			var gst = sub * 0.05;
			var totalBeforeTips =  sub + gst;
			var tipsValue = sub * tipPercent / 100;
			var total = (totalBeforeTips + tipsValue);
			var perPerson = total / split; 
			
			document.getElementById("receiptSub").innerHTML = ("Subtotal: $" + sub.toFixed(2));
			document.getElementById("receiptGstP").innerHTML = ("GST percentage: 5%");
			document.getElementById("receiptGst").innerHTML = ("GST: $" + gst.toFixed(2));
			document.getElementById("receiptBefore").innerHTML = ("Total before tip: $" + totalBeforeTips.toFixed(2));
			document.getElementById("receiptTipP").innerHTML = ("Tip percentage: " + tipPercent + "%");
			document.getElementById("receiptTip").innerHTML = ("Tip: $" + tipsValue.toFixed(2));
			document.getElementById("receiptGrand").innerHTML = ("Grand Total: $" + total.toFixed(2));
			document.getElementById("receiptSplit").innerHTML = ("Total per person: $" + perPerson.toFixed(2));
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