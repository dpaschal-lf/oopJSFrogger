

class FroggerGame{
	constructor(parentElement){
		this.parentElement = $( parentElement );
		this.mainElement = null;
		this.player = null; 
		this.cars = [];
		this.area = {};
		this.soundPlayer = new SoundPlayer();
		this.muted = true;
		this.handleKeyPressOnParent = this.handleKeyPressOnParent.bind(this);
	}
	mute(){
		this.muted = true;
	}
	unmute(){
		this.muted = false;
	}
	instantiateFrog(){
		this.player = new Frog();
		var playerElement = this.player.render();
		this.mainElement.append( playerElement );
		var frogTop = this.mainElement.height() - this.area.startingSidewalk.height();
		var frogLeft = this.mainElement.width()/2 - this.player.domElement.width()/2;
		this.player.placeAtPosition(frogLeft, frogTop);
		this.soundPlayer.unmute();
		this.soundPlayer.play('includes/sounds/dp_frogger.mp3');
	}
	play(sound){
		this.soundPlayer.play(sound);
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
		var randomSpeed = this.getRandomNumber(10, 30)/100 * this.area.road.width();
		var checkParentSizeCallback = this.getAreaSize.bind(this, 'road');
		var removalCallback = this.childRequestsRemoval.bind(this);
		var carOptions = {speed: randomSpeed, getParentSize: checkParentSizeCallback, parentRemoveChild: removalCallback}
		var newCar = new Car(carOptions );
		var carDomElement = newCar.render();
		this.area.road.append(carDomElement);
		this.cars.push(newCar);
		var maxHeight = this.area.road.height();
		var carHeight = newCar.domElement.height();
		var yPos = this.getRandomNumber(0, maxHeight - carHeight);
		newCar.placeAtPosition(0, yPos);
		newCar.start();
	}
	getAreaSize( area ){
		return {
			width: this.area[area].width(),
			height: this.area[area].height()
		}
	}
	childRequestsRemoval( child ){
		if(child.constructor === Car){
			var carIndex = this.cars.indexOf(child);
			this.cars.splice(carIndex, 1);
			debugger;
			child.stop();
			child.die();
		}
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









