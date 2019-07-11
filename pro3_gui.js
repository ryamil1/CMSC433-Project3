var tID; //we will use this variable to clear the setInterval()
var tID2;

function drawEnvironment(weather) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	if (weather == "cold") {
		ctx.fillStyle = "#ccfff9";
	}
	else if (weather == "hot" || weather == "very hot") {
		ctx.fillStyle = "#faf4b9";
	}
	else {
		ctx.fillStyle = "#25d931";
	}

	ctx.fillRect(0, 115, c.width, 75);
}

function drawCanvas() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var ctx2 = c.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, c.width, c.height);
	drawEnvironment("cool");
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("wagon");
	var img2 = document.getElementById("location");

	// if statement to change background to mountains in later part of the game
	ctx.drawImage(img2, 5, 275, 279, 11, 0, 10, 600, 40);			// draw the background
}

// Speeds
// 1 - Steady
// 1.5 - Strenuous
// 2 - Grueling
function animateWagon(pace) {
	var    position = 0; //start position for the image slicer
	const  interval = 200/pace;

	var times_run = 0;
	tID = setInterval ( () => {
		var ctx = (document.getElementById("myCanvas")).getContext("2d"); 
		var img = document.getElementById("wagon");
		ctx.drawImage(img, 0, position, 80, 29, 420, 70, 120, 45);

		// We increment the position by 30 each time
		if (position < 30) { 
			position = position + 30;
		}
		else { 
			position = 0;
		}
		//reset the position to 0px, once position exceeds 30px
		
		times_run += 1; 
		if(times_run > 1000/interval){
			clearInterval(tID);
		}
	} ,interval ); //end of setInterval

} //end of animateWagon()


///////////////////////////////////////////
// Draws moving landmarks on game screen //
///////////////////////////////////////////
function animateLandmark(distance, pace, landmark) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d"); 
	var img = document.getElementById("location");
	
/*	if (landmark == "Kansas River Crossing") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 175, 35, 35, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
*/
	// Landmarks
	if (landmark == "Kansas River Crossing" || landmark == "Big Blue River Crossing") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 205, 58, 55, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Kearney") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 215, 35, 50, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Chimney Rock") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 145, 35, 35, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Laramie") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 250, 145, 60, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Independence Rock") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 175, 35, 35, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
}

function stopAnimate(tID) {
	clearInterval(tID);
} //end of stopAnimate()