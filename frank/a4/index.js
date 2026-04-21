var startTime;
var currentTime;
var timesClicked = 0;
var timer;

function clickButton() {
	
    currentTime = new Date().getTime();

	if (timesClicked == 0) {
		startTime = currentTime;
	} else {
		document.getElementById("cps").innerHTML = "Clicks Per Second: " + Math.round(timesClicked / (currentTime - startTime) * 1000 * 100) / 100;
	}		
	
	timesClicked = timesClicked + 1;
    document.getElementById('demo').innerHTML = "Total Clicks: " + timesClicked;
	
	clearTimeout(timer);
	timer = setTimeout(sprintreset, 2000);


}






function sprintreset() {
	timesClicked = 0;
	document.getElementById("cps").innerHTML = "Sprint Reset. ";
	document.getElementById("demo").innerHTML = "Clicks Reset. ";
}