var tID; //we will use this variable to clear the setInterval()
function animateScript($speed) {
	var    position = 0; //start position for the image slicer
	const  interval = 300/$speed;

	tID = setInterval ( () => {
		console.log(position);
		var ctx = (document.getElementById("myCanvas")).getContext("2d"); 
		var img = document.getElementById("wagon");
		ctx.drawImage(img, 0, position, 80, 30, 450, 70, 80, 30);

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

function stopAnimate() {
	clearInterval(tID);
} //end of stopAnimate()

// Testing Speed
// 1 - Slow
// 2 - Normal
// 3 - Grueling
//animateScript(2); 