var startTime;
var currentTime;
var timesClicked= 0 ;
var timer;
function clickButton() {
		currentTime = new Date().getTime();
		
		if (timesClicked == 0) {
				startTime = currentTime;
    }
    else {
        currentTime = new Date().getTime();
        document.getElementById("cps").innerHTML = "Clicks per second: " + Math.round(timesClicked / (currentTime - startTime) * 1000 * 100) / 100;
    }
    timesClicked = timesClicked + 1;
    document.getElementById('demo').innerHTML = "Clicks: " + timesClicked;
}