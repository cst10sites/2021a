function clickedOk() {
	
	var subTotal = document.getElementById("sTotal").value;
	var amountTip = document.getElementById("tipAmount").value;
	
	var amountSplit = document.getElementById("splitAmount").value;
 
	var atxTotal = Math.round((parseFloat(subTotal) * 1.05)* 100)/100;
	var atTotal = Math.round((atxTotal *  parseFloat(amountTip))* 100)/100;
    var afterSplit = Math.round(atTotal / parseInt(amountSplit)*100)/100;
 //alert(amountSplit);
    document.getElementById("totalATX").innerHTML ="After Tax Total:$"+ atxTotal;
 	
	document.getElementById("totalAT").innerHTML = "Total After Tip:$" + atTotal;
	
	document.getElementById("totalG").innerHTML = "After Split:$" + afterSplit;
	
	
 
	
}

function clickedreset() {
	document.getElementById("totalATX").innerHTML = "After Tax tTotal:" + "";
	document.getElementById("totalAT").innerHTML = "Total After Tip:" + "";
	document.getElementById("totalG").innerHTML = "After Split:" + "";
}
/*var subTotal = document.getElementById("sTotal").value;
var gts5 = document.getElementById("GST").value;
var amountTip = document.getElementById("tipAmount").value;
var atTotal;
var amountSplit = document.getElementById("splitAmount").value;
var gTotal;
var atxTotal;
 
 function clickedOk() {
	 
	document.getElementById("totalATX").innerHTML = atxTotal;
	 document.getElementById("totalAT").innerHTML = atTotal;
	 document.getElementById("totalG").innerHTML = gTotal;
	 
	 document.getElementById("totalATX").innerHTML= ("After Tax Total:"+ subTotal*gst5 );
		if (parseInt(subTotal)> -1)
 }*/