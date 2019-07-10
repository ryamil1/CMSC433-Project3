var tID; //we will use this variable to clear the setInterval()
var tID2;

// Speeds
// 1 - Steady
// 1.5 - Strenuous
// 2 - Grueling
function animateScript(pace) {
	if (pace == "steady") {
		speed = 1;
	}
	else if (pace == "strenuous") {
		speed = 1.5;
	}
	else if (pace = "grueling") {
		speed = 2;
	}

	var    position = 0; //start position for the image slicer
	const  interval = 300/speed;
	
	tID = setInterval ( () => {
		var ctx = (document.getElementById("myCanvas")).getContext("2d"); 
		var img = document.getElementById("wagon");
		ctx.drawImage(img, 0, position, 80, 29, 450, 70, 120, 45);

		// We increment the position by 30 each time
		if (position < 30) { 
			position = position + 30;
		}
		else { 
			position = 0;
		}
		//reset the position to 0px, once position exceeds 30px
	} ,interval ); //end of setInterval

} //end of animateScript()

function stopAnimate(tID) {
	clearInterval(tID);
} //end of stopAnimate()

function animateLandmark(pace, landmark) {
	if (pace == "steady") {
		speed = 1;
	}
	else if (pace == "strenuous") {
		speed = 1.5;
	}
	else if (pace = "grueling") {
		speed = 2;
	}

	speed = speed * 2;
	var    position = 0; //start position for the image slicer
	const  interval = 300/speed;
	
	tID2 = setInterval ( () => {
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d"); 
		var img = document.getElementById("location");
		if (landmark == "Kansas River Crossing") {
			ctx.drawImage(img, 205, 58, 55, 23, position, 71, 90, 45);
			ctx.fillStyle = "black";
			ctx.fillRect(position-1, 107, speed+2, 8);
		}
		
		// We increment the position by 30 each time
		if (position < 360) { 
			position = position + speed;
		}
		else {
			stopAnimate(tID);
		}
		//reset the position to 0px, once position exceeds 30px
	} ,interval ); //end of setInterval
}