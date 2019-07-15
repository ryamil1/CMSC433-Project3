//Ryan Miller and Kyle Castle

// Holds River Crossing Background
var imageRepository = new function() {
	// Define images
	this.background = new Image();
	// Set images src
	this.background.src = "oregon_trail_sprites/river.png";
}

/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the river. Sets up default variables
 * that all child objects will inherit, as well as the default
 * functions.
 */
function Drawable() {
	this.init = function(x, y) {
		// Default variables
		this.x = x;
		this.y = y;
	}
	this.speed = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;
	// Define abstract function to be implemented in child objects
	this.draw = function() {
	};
}

/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */
function Background() {
	this.speed = 1; // Redefine speed of the background for panning
	// Implement abstract function
	this.draw = function() {
        // Pan background
        var img = document.getElementById("location");
		this.y += this.speed;
        this.context.drawImage(imageRepository.background, this.x, this.y);

        // draw the correct image
        if (method == "caulk") {
            this.context.drawImage(img, 270, 2, 73, 28, this.canvasWidth/2, 325, 80, 40);	
        }
        else if (method == "ford") {
            this.context.drawImage(img, 270, 30, 73, 28, this.canvasWidth/2, 325, 80, 40);
        }
        else if (method == "ferry") {
            this.context.drawImage(img, 270, 58, 73, 35, this.canvasWidth/2, 325, 80, 40);
        }

        // If the image scrolled off the screen, reset
        // Crossed the river
        if (this.y >= this.canvasHeight / 2) {
            this.context = null;
            doAnim = false;
        }
        // Unsuccessful
        else if (!result) {
            if (this.y >= (this.canvasHeight / 2) - 50) {
                this.context.drawImage(img, 270, 93, 73, 42, this.canvasWidth/2, 325, 80, 40);
                this.context = null;
                doAnim = false;
            }
        }
        else { 
            return 0;
        }
	};
}
// Set Background to inherit properties from Drawable
Background.prototype = new Drawable();

/**
 * Creates the River object which will hold all objects and data for
 * the River.
 */
function River() {
	/*
	 * Gets canvas information and context and sets up all river
	 * objects.
	 * Returns true if the canvas is supported and false if it
	 * is not. This is to stop the animation script from constantly
	 * running on older browsers.
	 */
	this.init = function() {
		// Get the canvas element
		this.bgCanvas = document.getElementById('river');
		// Test to see if canvas is supported
		if (this.bgCanvas.getContext) {
			this.bgContext = this.bgCanvas.getContext('2d');
			// Initialize objects to contain their context and canvas
			// information
			Background.prototype.context = this.bgContext;
			Background.prototype.canvasWidth = this.bgCanvas.width;
			Background.prototype.canvasHeight = this.bgCanvas.height;
			// Initialize the background object
			this.background = new Background();
			this.background.init(0,0); // Set draw point to 0,0
			return true;
        } 
        else {
			return false;
		}
	};
	// Start the animation loop
	this.start = function() {
        animate();
	};
}

/**
 * The animation loop. Calls the requestAnimationFrame shim to
 * optimize the river loop and draws all river objects. This
 * function must be a gobal function and cannot be within an
 * object.
 */
function animate() {
    if (!doAnim) {
        river.context=null; 
        return;
    }
	requestAnimFrame( animate );
    river.background.draw();
}
/**
 * requestAnim shim layer by Paul Irish
 * Finds the first API that works to optimize the animation loop,
 * otherwise defaults to setTimeout().
 */
window.requestAnimFrame = (function(){   
    return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

/**
 * Initialize the Game and starts it.
 */
var river;
var doAnim;
var method;
var result;
function crossRiver(m, res) {
    method = m;
    result = res;
    doAnim = true;
    river = new River();
	if(river.init()) {
        river.start();
    }
}