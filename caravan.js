class Caravan {
	constructor(day) {
		this.day = day;
		this.distance = 0;
		this.weather = "clear"; //getWeather; 
		this.pace = 1;  //expecting ui to reach in to change this when appropriate
		this.rations = 3; //expecting ui to reach in to change this when appropriate
		this.starving = false; //managed in setFood
		this.location = 0; //tracks if caravan has hit for laramie for distance calculations
		this.nextLandmark = "ks river"; 
		this.eventLocked = 0; //tracks days which need to tick for multi-day events

		this.members = [];
		this.oxen = 0;
		this.food = 0;
		this.ammo = 0;
		this.tongue = 0;
		this.wheel = 0;
		this.axle = 0;
		this.clothes = 0;
		this.money = 0;
	}

	getWeather(){
		value = Math.floor(Math.random() * 100);
		//Case for weather
	}

	getEvent(){
		//random to get weather
		//random to get event
		//huge case statement
			//each event controls the update of health and distance
		this.setDistance();
		this.setFood();
		var pass_rat = this.mapRationToHealth();
		var pass_pace = this.mapPaceToHealth();
		this.members.forEach(function(element){
			element.setHealth(pass_rat, pass_pace);
			console.log("Member check:", element.name, element.health)
		});
	}

	setFood(){
		var consumption = this.members.length * this.rations;
		if(consumption > this.food){
			console.log("Starving")
			this.starving = true;
			this.food = 0;
		}
		else {
			console.log("Not starving.", this.starving);
			console.log("food", this.food);
			this.starving = false;
			this.food -= consumption;
		}
	}

	setDistance(other = 0){
		if(this.location){
			this.distance += 12 * this.pace + other;
		}
		else{
			this.distance += 20 * this.pace + other;
		}
		//huge case statement for landmarks
	}

	//Rests for one day.
	rest(day){
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
		this.time += 1;
	}

	//Generate a random amount of food from 15-100, return the value gained.
	goFishing(){
		console.log("Going fishing.")
		var fish = 15 + Math.floor(Math.random() * 85);
		this.food += fish;
		this.setFood();
		this.time += 1;
		return fish;
	}

	mapRationToHealth(){
		if(this.starving){
			return -3;
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

		//If nobody died, this is false, else it is the name of the dead person.
		return r_val;
	}

	makeMember(name){
		this.members.push(new Person(name))
	}
}