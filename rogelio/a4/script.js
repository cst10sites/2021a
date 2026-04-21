var startTime;
var currentTime;
var timesClicked = 0;
function timeElapsed() {
	timesClicked = timesClicked + 1;
	if (startTime == currentTime) {//true statement at start
	startTime = new Date().getTime();//gets time in milliseconds
		/*document.getElementById("lap").innerHTML = Lap;//replaces start to lap*/
		document.getElementById("timeElapsed").innerHTML = "Clicks per second: 0 clicks";//replaces timeElapsed
		document.getElementById("click").innerHTML = "Times clicked = 1"
	}
	else {
		currentTime = new Date().getTime();
		document.getElementById("timeElapsed").innerHTML = "Clicks per second: " + Math.round(timesClicked / (currentTime - startTime) * 100000) / 100 + " clicks";
		document.getElementById("click").innerHTML = "Times clicked = " + timesClicked;
	}
}