

class FroggerGame{
	constructor(parentElement){
		this.parentElement = $( parentElement );
		this.mainElement = null;
		this.player = null; 
		this.cars = [];
		this.area = {};
		this.handleKeyPressOnParent = this.handleKeyPressOnParent.bind(this);
	}
	instantiateFrog(){
		debugger;
		this.player = new Frog();
		var playerElement = this.player.render();
		this.mainElement.append( playerElement );
		var frogTop = this.mainElement.height() - this.area.startingSidewalk.height();
		var frogLeft = this.mainElement.width()/2 - this.player.domElement.width()/2;
		this.player.placeAtPosition(frogLeft, frogTop);
	}
	addEventHandlers(){
		this.parentElement.on('keypress', this.handleKeyPressOnParent );
	}
	handleKeyPressOnParent(event){
		console.log('passing movement keys to frog')
		var letter = event.key;
		this.player.receiveMove( letter );
	}
	addCar(){
		var newCar = new Car();
		var carDomElement = newCar.render();
		this.area.road.append(carDomElement);
		this.cars.push(newCar);
		var maxHeight = this.area.road.height();
		var carHeight = newCar.domElement.height();
		var yPos = this.getRandomNumber(0, maxHeight - carHeight);
		console.log(yPos);
		
		newCar.placeAtPosition(0, yPos);
	}

	getRandomNumber(min=0, max=100){
		return Math.floor( Math.random() * (max-min+1)) + min;
	}
	render(){
		this.mainElement = $("<main>",{
			'class': 'gameContainer gameZone'
		});
		this.area.startingSidewalk = $("<section>",{
			'class': 'sidewalk gameZone'
		})
		this.area.road = $("<section>",{
			'class': 'road gameZone'
		})
		this.area.middleSidewalk = $("<section>",{
			'class': 'sidewalk gameZone'
		})
		this.area.river = $("<section>",{
			'class': 'river gameZone'
		})
		this.area.nests = $("<section>",{
			'class': 'nestingarea gameZone'
		})
		this.mainElement.append(
			this.area.nests,
			this.area.river,
			this.area.middleSidewalk,
			this.area.road,
			this.area.startingSidewalk
		);
		this.parentElement.append( this.mainElement );
	}
}









