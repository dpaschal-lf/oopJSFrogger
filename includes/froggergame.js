

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
		this.mainElement.append(carDomElement);
	}

	render(){
		this.mainElement = $("<main>",{
			'class': 'gameContainer'
		});
		this.area.startingSidewalk = $("<section>",{
			'class': 'sidewalk'
		})
		this.area.road = $("<section>",{
			'class': 'road'
		})
		this.area.middleSidewalk = $("<section>",{
			'class': 'sidewalk'
		})
		this.area.river = $("<section>",{
			'class': 'river'
		})
		this.area.nests = $("<section>",{
			'class': 'nestingarea'
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









