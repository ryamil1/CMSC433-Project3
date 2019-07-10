var tID; //we will use this variable to clear the setInterval()
var tID2;

function drawCanvas() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var ctx2 = c.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx2.fillStyle = "#25d931";
	ctx2.fillRect(0, 115, c.width, 75);

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("wagon");
	var img2 = document.getElementById("location");
	ctx.drawImage(img2, 5, 275, 279, 11, 0, 25, 600, 25);			// draw the background
}

// Speeds
// 1 - Steady
// 1.5 - Strenuous
// 2 - Grueling
function animateWagon(pace) {
	var    position = 0; //start position for the image slicer
	const  interval = 300/pace;

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
		ctx.drawImage(img, 250, 145, 60, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 1000);
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
		}, 1000);
	}
	else if (landmark == "Fort Kearney") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 215, 35, 50, 23, position, 70, 90, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 1000);
	}
	else if (landmark == "Chimney Rock") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 145, 35, 35, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 1000);
	}
	else if (landmark == "Fort Laramie") {
		var position = 340 - (distance * 7);	
		console.log("Position: ", position);
		ctx.drawImage(img, 250, 145, 60, 23, position, 70, 75, 45);

		setTimeout(function() {
			ctx.fillStyle = "black";
			ctx.fillRect(position, 70, 90, 45);
		}, 1000);
	}
}


function stopAnimate(tID) {
	clearInterval(tID);
} //end of stopAnimate()