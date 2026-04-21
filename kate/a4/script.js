var startTime;
var currentTime;
var timesClicked = 0;
var timer;

function clickButton() {
	
    currentTime = new Date().getTime();

	if (timesClicked == 0) {
		startTime = currentTime;
	} else {
		document.getElementById("clicksPerSecond").innerHTML = "Clicks Per Second: " + Math.round(timesClicked / (currentTime - startTime) * 1000 * 100) / 100;
	}		
	
	timesClicked = timesClicked + 1;
    document.getElementById('totalClicks').innerHTML = "Total Clicks: " + timesClicked;

}
