var tID; //we will use this variable to clear the setInterval()
function animateScript($speed) {
	var    position = 0; //start position for the image slicer
	const  interval = 300/$speed;
	
	tID = setInterval ( () => {
		document.getElementById("image").style.backgroundPosition = `0px -${position}px`; 

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
animateScript(2);