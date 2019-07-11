class Person{
	constructor(name){
		this.name = name;
		this.health = 10000;
		this.is_diseased = false;
	}

	setHealth(food, pace, other = 0) {
		this.health += food + pace + other;
		if(this.is_diseased){
			this.health -= 3;
		}
		if(this.health > 100){
			this.health = 100;
		}
	}

	isAlive(){
		if(this.health > 0){
			return true;
		}
		console.log("is dead")
		return false;
	}
}