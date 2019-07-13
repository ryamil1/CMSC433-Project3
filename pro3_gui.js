var tID; //we will use this variable to clear the setInterval()
var tID2;
var tID3

function drawEnvironment(phase, weather) {
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
	
	var img = document.getElementById("location");

	// if statement to change background to mountains in later part of the game
	if (phase == 0) {
		ctx.drawImage(img, 5, 275, 279, 11, 0, 10, 600, 40);			// draw the background
	}
	else {
		ctx.drawImage(img, 5, 290, 279, 19, 0, 10, 600, 40);			// draw the background			
	}
}
	
// Phase 1 - Grass
// Phase 2 - Mountains
function drawCanvas(phase, weather) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, c.width, c.height);
	drawEnvironment(phase, weather);
}

// Draw the Game Over Screen
function drawGrave(player) {
	var c = document.getElementById("myCanvas");
	$("#data").hide();
	$("#info").hide();
	$("#wagon").remove();
	$("#location").remove();
	c.width = 625;
	c.height = 430;
	var ctx = c.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, c.width, c.height);
	
	// Draw Grass
	ctx.fillStyle = "#25d931";
	ctx.fillRect(0, c.height/2, c.width, c.height/2);

	// Draw Gravestone
	ctx.fillStyle = "#bfbfbf";
	ctx.lineWidth = 8;
	ctx.arc(300, 175, 125, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillRect(175, 175, 250, 225);
	ctx.fill();
	ctx.fillStyle = "black";
	ctx.font = "24px georgia";
	ctx.fillText("HERE LIES", 250, 200, 100);
	ctx.fillText(player, 250, 225, 75);
	ctx.font = "16px georgia";
	ctx.fillText("HE LIVED EACH DAY AS IF", 225, 275, 150);
	ctx.fillText("IT WERE HIS LAST.", 235, 300, 130);
	ctx.fillText("ESPECIALLY THIS ONE.", 225, 325, 150);
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
	var position = 340 - (distance * 7);
	console.log(landmark);
	console.log("Position: ", position);

	// Landmarks
	if (landmark == "Kansas River Crossing" || landmark == "Big Blue River Crossing" || landmark == "Green River" || landmark == "Snake River Crossing") {
		ctx.drawImage(img, 205, 58, 55, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Kearney") {
		ctx.drawImage(img, 215, 35, 50, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Chimney Rock") {
		ctx.drawImage(img, 145, 35, 35, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Laramie") {
		ctx.drawImage(img, 250, 145, 60, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Independence Rock") {
		ctx.drawImage(img, 175, 35, 35, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "South Pass") {
		ctx.drawImage(img, 215, 5, 50, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Soda Springs") {
		ctx.drawImage(img, 145, 58, 60, 20, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Hall") {
		ctx.drawImage(img, 120, 150, 80, 20, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 125, 45);
		}, 2000);
	}
	else if (landmark == "Fort Boise") {
		ctx.drawImage(img, 195, 125, 60, 20, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 125, 45);
		}, 2000);
	}
	else if (landmark == "Blue Mountains") {
		ctx.drawImage(img, 192, 110, 60, 15, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 125, 45);
		}, 2000);
	}
	else if (landmark == "The Dalles") {
		ctx.drawImage(img, 145, 85, 120, 25, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Bridger") {
		ctx.drawImage(img, 195, 150, 60, 20, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Fort Walla Walla") {
		ctx.drawImage(img, 140, 125, 63, 20, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
	else if (landmark == "Barlow Toll Road") {
		ctx.drawImage(img, 140, 125, 63, 20, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 2000);
	}
}

// Animate the river crossing based on the bool 'result'
function crossRiver(method, result) {
	var c = document.getElementById("river");
	var ctx = c.getContext("2d"); 
	var img = document.getElementById("location");

	c.height = 430;
	c.width = 625;
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, c.width, c.height);

	var h = c.height;
	var w = c.width;

	// Display the river canvas
	$("#river").show();

	// hide images
	$("#myCanvas").hide();
	$("#data").hide();
	$("#info").hide();
	$("#wagon").hide();
	$("#location").hide();

	
	ctx.fillStyle = "#2222ff";
	ctx.fillRect(0, 0, w, h)
	ctx.fillStyle = "tan";
	ctx.fillRect(0, 0, w, h/8);
	ctx.fillRect(0, h - h/8, w, h)

	if (method == "caulk") {
		ctx.drawImage(img, 270, 2, 73, 28, w/2 - 25, h/2 - 14, 80, 40);	
		inc = 91;
	}
	else if (method == "ford") {
		ctx.drawImage(img, 270, 30, 73, 28, w/2 - 25, h/2 - 14, 80, 40);
		inc = 63;
	}
	else if (method == "ferry") {
		ctx.drawImage(img, 270, 58, 73, 35, w/2 - 25, h/2 - 14, 80, 40);
		inc = 35;
	}

	if (!result) {
		const interval = 2000;
		const interval2 = 2000;
		var times_run = 0;
		tID2 = setInterval ( () => {
			ctx.drawImage(img, 270, 93, 73, 42, w/2 - 25, h/2 - 14, 80, 40);
			
			tID3 = setInterval ( () => {
				$("#river").hide();
				$("#myCanvas").show();
				$("#data").show();
				$("#info").show();
				$("#wagon").show();
				$("#location").show();
				clearInterval(tID3)
			}, interval2 );
			clearInterval(tID2);
		} ,interval ); //end of setInterval
	}
}

function stopAnimate(tID) {
	clearInterval(tID);
} //end of stopAnimate()