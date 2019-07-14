var tID; //we will use this variable to clear the setInterval()
var tID2;

function drawEnvironment(weather, phase) {
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
function drawCanvas(phase) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, c.width, c.height);
	drawEnvironment("cool", phase);
}

// Draw the Game Over Screen
function drawGrave(player) {
	var c = document.getElementById("myCanvas");
	$("#data").hide();
	$("#info").hide();
	$("wagon").remove();
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

// Display the detailed image of the landmark
function showLandmark(landmark) {
	var c = document.getElementById("places");
	var ctx = c.getContext("2d"); 
	var img = document.getElementById("landmarks");

	$("myCanvas").hide();
	$("river").show();

	if (landmark == "Kansas River Crossing") {
		ctx.drawImage(img, 1, 1, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Big Blue River Crossing") {
		ctx.drawImage(img, 1, 164, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Green River") {
		ctx.drawImage(img, 1, 326, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Chimney Rock") {
		ctx.drawImage(img, 1, 489, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Independence") {
		ctx.drawImage(img, 1, 652, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Snake River Crossing") {
		ctx.drawImage(img, 1, 813, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Fort Kearney") {
		ctx.drawImage(img, 284, 1, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Independence Rock") {
		ctx.drawImage(img, 284, 164, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Fort Laramie") {
		ctx.drawImage(img, 284, 326, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Willamette Valley") {
		ctx.drawImage(img, 284, 489, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "The Dalles") {
		ctx.drawImage(img, 284, 652, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Soda Springs") {
		ctx.drawImage(img, 284, 813, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Fort Bridger") {
		ctx.drawImage(img, 565, 1, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Fort Boise") {
		ctx.drawImage(img, 565, 164, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Fort Walla Walla") {
		ctx.drawImage(img, 565, 326, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Fort Hall") {
		ctx.drawImage(img, 565, 489, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "Blue Mountains") {
		ctx.drawImage(img, 565, 652, 279, 159, 0, 0, c.width, c.height);
	}
	else if (landmark == "South Pass") {
		ctx.drawImage(img, 565, 813, 279, 159, 0, 0, c.width, c.height);
	}

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

function stopAnimate(tID) {
	clearInterval(tID);
} //end of stopAnimate()
