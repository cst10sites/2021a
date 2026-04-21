var timesClicked= 0;
var startTime;
var currentTime;

function buttonBehavior() {
	timesClicked = timesClicked + 1;
	document.getElementById('demo').innerHTML = timesClicked;
	
	}

function timeElapsed() {
    
	if (startTime == currentTime ) {
        startTime = new Date().getTime();
       // document.getElementById("lap").innerHTML = "laps"
//document.getElementById("timeElapsed").innerHTML = "Time Elasped: 0";
    }
	
	
    else {
        currentTime = new Date().getTime();
        document.getElementById("timeElapsed").innerHTML = + timesClicked/ (Math.round(currentTime - startTime) / 1000) + " clicks per second";
    }
    
}

