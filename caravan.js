class Caravan {
	constructor(day, career = "Banker") {
		this.day = day;
		this.distance = 0;
		this.target_distance = 102;
		this.weather = "clear"; //getWeather; 
		this.pace = 1;  //expecting ui to reach in to change this when appropriate
		this.rations = 3; //expecting ui to reach in to change this when appropriate
		this.starving = false; //managed in setFood
		this.location = 0; //tracks if caravan has hit fort laramie for distance calculations
		this.nextLandmark = "Kansas River Crossing"; //needs the ui to reach in and change this based on player decisions
		this.eventLocked = 0; //tracks days which need to tick for multi-day events
		this.fort = 1;
		this.hitLandmark = "";

		if(career == "Banker"){
			this.money = 1600;
		} else if(career == "Carpenter") {
			this.money = 800;
		} else if(career == "Farmer"){
			this.money = 400;
		}


		this.members = [];
		this.oxen = 0;
		this.food = 0;
		this.ammo = 0;
		this.tongue = 0;
		this.wheel = 0;
		this.axle = 0;
		this.clothes = 0;
		this.job = career;
	}

	getEvent(){
		var event = "";
		if(!this.eventLocked){
			this.hitLandmark = "";
			var gotEvent = false;
			var randID = Math.floor(Math.random() * 100);
			if(randID > 90){
				event = "Lost the trail. Lose " + 1 + " day(s).";
				this.eventLocked = 1;
				gotEvent = true;
			}
			if(!gotEvent){
				this.setDistance();
			}
		//random to get event
		//huge case statement
		//each event controls the update of health and distance
		} else{
			this.eventLocked -= 1;
		} 
		this.setFood();
		var pass_rat = this.mapRationToHealth();
		var pass_pace = this.mapPaceToHealth();
		this.members.forEach(function(element){
			element.setHealth(pass_rat, pass_pace);
		});
		this.day++;
		return event;

	}

	setFood(){
		var consumption = this.members.length * this.rations;
		if(consumption > this.food){
			this.starving = true;
			this.food = 0;
		}
		else {
			this.starving = false;
			this.food -= consumption;
		}
	}

	setDistance(other = 0){
		//If there aren't at least 4 oxen, move half speed.
		var eno_oxen = .5;
		if(this.oxen > 3){
			eno_oxen = 1
		} else if (this.oxen == 0){
			//Don't move, need to provide user feedback.
		}

		if(this.location){
			this.distance += (12 * this.pace + other) * eno_oxen;
			this.fort = 0;
			this.hitLandmark = "";
		}
		else{
			this.distance += (20 * this.pace + other) * eno_oxen;
			this.fort = 0;
			this.hitLandmark = "";
		}
		
		if(this.nextLandmark == "Kansas River Crossing" && this.distance >= this.target_distance) {
			this.nextLandmark = "Big Blue River Crossing";
			this.distance = this.target_distance;
			this.target_distance += 83;
			this.hitLandmark = "Kansas River Crossing";
		}
		else if(this.nextLandmark == "Big Blue River Crossing" && this.distance >= this.target_distance) {
			this.nextLandmark = "Fort Kearney";
			this.distance = this.target_distance;
			this.target_distance += 119;
			this.hitLandmark = "Big Blue River Crossing";
		}
		else if(this.nextLandmark == "Fort Kearney" && this.distance >= this.target_distance) {
			this.nextLandmark = "Chimney Rock";
			this.distance = this.target_distance;
			this.target_distance += 250;
			this.fort = 2;
			this.hitLandmark = "Fort Kearney";
		}
		else if(this.nextLandmark == "Chimney Rock" && this.distance >= this.target_distance) {
			this.nextLandmark = "Fort Laramie";
			this.distance = this.target_distance;
			this.target_distance += 86;
			this.hitLandmark = "Chimney Rock";
		}
		else if(this.nextLandmark == "Fort Laramie" && this.distance >= this.target_distance) {
			this.nextLandmark = "Independence Rock";
			this.distance = this.target_distance;
			this.target_distance += 190;
			this.location = 1;
			this.fort = 3;
			this.hitLandmark = "Fort Laramie";
		}
		else if(this.nextLandmark == "Independence Rock" && this.distance >= this.target_distance) {
			this.nextLandmark = "South Pass";
			this.distance = this.target_distance;
			this.target_distance += 102;
			this.hitLandmark = "Independence Rock";
		}
		else if(this.nextLandmark == "South Pass" && this.distance >= this.target_distance) {
			this.nextLandmark = "flag1";
			this.distance = this.target_distance;
			this.hitLandmark = "South Pass";
		}
		else if(this.nextLandmark == "Green River" && this.distance >= this.target_distance) {
			this.nextLandmark = "Soda Springs";
			this.distance = this.target_distance;
			this.target_distance += 144;
			this.hitLandmark = "Green River";
		}
		else if(this.nextLandmark == "Fort Bridger" && this.distance >= this.target_distance) {
			this.nextLandmark = "Soda Springs";
			this.distance = this.target_distance;
			this.target_distance += 162;
			this.fort = 4;
			this.hitLandmark = "Fort Bridger";
		}
		else if(this.nextLandmark == "Soda Springs" && this.distance >= this.target_distance) {
			this.nextLandmark = "Fort Hall";
			this.distance = this.target_distance;
			this.target_distance += 57;
			this.hitLandmark = "Soda Springs";
		}
		else if(this.nextLandmark == "Fort Hall" && this.distance >= this.target_distance) {
			this.nextLandmark = "Snake River Crossing";
			this.distance = this.target_distance;
			this.target_distance += 182;
			this.fort = 5;
			this.hitLandmark = "Fort Hall";
		}
		else if(this.nextLandmark == "Snake River Crossing" && this.distance >= this.target_distance) {
			this.nextLandmark = "Fort Boise";
			this.distance = this.target_distance;
			this.target_distance += 114;
			this.hitLandmark = "Snake River Crossing";
		}
		else if(this.nextLandmark == "Fort Boise" && this.distance >= this.target_distance) {
			this.nextLandmark = "Blue Mountains";
			this.distance = this.target_distance;
			this.target_distance += 160;
			this.fort = 6;
			this.hitLandmark = "Fort Boise";
		}
		else if(this.nextLandmark == "Blue Mountains" && this.distance >= this.target_distance) {
			this.nextLandmark = "flag2";
			this.distance = this.target_distance;
			this.hitLandmark = "Blue Mountains";
		}
		else if(this.nextLandmark == "Fort Walla Walla" && this.distance >= this.target_distance) {
			this.nextLandmark = "The Dalles";
			this.distance = this.target_distance;
			this.target_distance += 120;
			this.fort = 7;
			this.hitLandmark = "Fort Walla Walla";
		}
		else if(this.nextLandmark == "The Dalles" && this.distance >= this.target_distance) {
			this.nextLandmark = "flag3";
			this.distance = this.target_distance;
			this.hitLandmark = "The Dalles";
		}
		else if(this.nextLandmark == "Oregon" && this.distance >= this.target_distance) {
			this.nextLandmark = "flag4";
			this.distance = this.target_distance;
			this.hitLandmark = "Oregon";
		}
	}

	//Helper methods to handle forks.  Expecting UI to call these methods based on input.
	goToGreenRiver(){
		this.nextLandmark = "Green River";
		this.target_distance += 57;
	}

	goToFortBridger(){
		this.nextLandmark = "Fort Bridger";
		this.target_distance += 125;
	}

	goToFortWallaWalla(){
		this.nextLandmark = "Fort Walla Walla";
		this.target_distance += 120;
	}
	
	goToTheDalles(){
		this.nextLandmark = "The Dalles";
		this.target_distance += 125;
	}

	goToBarlowTollRoad(){
		this.nextLandmark = "Oregon";
		this.target_distance += 100;
	}

	//Rests for one day.
	rest(day){
		stopAnimate(tID);
		//First check for food, could be starving.
		this.setFood();
		//Get a random rest value and the current food consumption rate
		var rest_val = 1 + Math.floor(Math.random() * 4);
		var ration_val = this.mapRationToHealth();
		//For each member of the caravan, adjust their health, reset disease, check for life.
		this.members.forEach(function(element, index){
			if(day == 2){
				element.is_diseased = false;
			}
			element.setHealth(ration_val, 0, rest_val);
		});
		this.day += 1;
		animateWagon(this.pace);
	}

	//Generate a random amount of food from 15-100, return the value gained.
	goFishing(){
		var fish = 15 + Math.floor(Math.random() * 85);
		this.food += fish;
		this.setFood();
		this.day += 1;
		return fish;
	}

	mapRationToHealth(){
		if(this.starving){
			return -4;
		}	

		if(this.rations == 3){
			return 1;
		}
		else if(this.rations == 2){
			return 0;
		}
		else{
			return -1;
		}
	}

	mapPaceToHealth(){
		if(this.pace == 2){
			return -2;
		}
		else if(this.pace == 1.5){
			return -1;
		}
		else{
			return 0;
		}
	}

	//Returns the name of someone who died or false if all live.
	checkForDead(){
		//Everyone is dead.
		if(!this.members.length){
			return -1;
		}
		
		var r_val = false;
		var re_index;
		//For each member, check if they're alive.  If not, remove them from the array.
		for(var i = 0; i < this.members.length; i++){
			if(!this.members[i].isAlive()){
				r_val = this.members[i].name;
				re_index = i;
				break;
			}
		};
		if(r_val){
			this.members.splice(re_index, 1);
		}

		console.log("Checking for dead:", r_val)
		//If nobody died, this is false, else it is the name of the dead person.
		return r_val;
	}

	makeMember(name){
		this.members.push(new Person(name));
	}

	partyHealth(){
		var health = 0;
		for(var i = 0; i < this.members.length; i++){
			health += this.members[i].health;
		}

		if(health > this.members.length * 75){
			return "good"
		} else if(health > this.members.length * 50){
			return "fair"
		} else if(health > this.members.length * 25){
			return "poor"
		} else{
			return "very poor"
		}
	}

	loseRandom(){
		var target = Math.floor(Math.random() * 6);
		var ret_string = "";
		if(target == 0){
			value = Math.floor(Math.random() * this.oxen);
			this.oxen -= value;
			if (value){
				ret_string += value + " oxen lost.<br>"
			}
		}else if(target == 1){
			value = Math.floor(Math.random() * this.food);
			this.food -= value;
			if (value){
				ret_string += value + " pounds of food lost.<br>"
			}
		}else if(target == 2){
			value = Math.floor(Math.random() * this.ammo);
			this.ammo -= value;
			if (value){
				ret_string += value + " ammo lost.<br>"
			}
		}else if(target == 3){
			value = Math.floor(Math.random() * this.wheel);
			this.wheel -= value;
			if (value){
				ret_string += value + " wheels lost.<br>"
			}
		}else if(target == 4){
			value = Math.floor(Math.random() * this.tongue);
			this.tongue -= value;
			if (value){
				ret_string += value + " tongues lost.<br>"
			}
		}else if(target == 5){
			value = Math.floor(Math.random() * this.axle);
			this.axle -= value;
			if (value){
				ret_string += value + " axles lost.<br>"
			}
		}else if(target == 6){
			value = Math.floor(Math.random() * this.clothes);
			this.clothes -= value;
			if (value){
				ret_string += value + " clothes lost.<br>"
			}
		}

		var dead_pers = 0;
		target = Math.floor(Math.random() * this.members.length);
		value = Math.floor(Math.random() * 100);
		if(value > 85){
			ret_string += this.members[target].name + " has died."
			dead_pers = target
		}
		if(dead_pers){
			this.members.splice(target, 1);
		}	

		return ret_string;
	}
}