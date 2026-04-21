var clicks = 0;
var startTime;
var currentTime = new Date().getTime();
function Click() {

    document.getElementById('totalClicks').innerHTML = "Total Clicks: " + clicks;
    if (clicks == 0) {
        startTime = new Date().getTime();
    } 
    else {
        currentTime = new Date().getTime();
        document.getElementById("clicksPerSecond").innerHTML = "Clicks Per Second: " + Math.round(clicks/ (currentTime - startTime) * 1000 * 100) / 100;
    }
    document.getElementById("button").innerHTML = "Click Here";

    clicks++;

}