var startTime;
var currentTime;
var timesClicked= 0;
var timer;
function clickbutton() {
  
		currentTime = new Date().getTime();
		
		if (timesClicked == 0) {
				startTime = currentTime;
    }
    else {
        currentTime = new Date().getTime();
        document.getElementById("cps").innerHTML = "Clicks Per Second: " + Math.round(timesClicked / (currentTime - startTime) * 1000 * 100) / 100;
    }
    timesClicked = timesClicked + 1;
    document.getElementById('demo').innerHTML = "Total Clicks: " + timesClicked;
}