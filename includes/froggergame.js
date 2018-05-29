

class FroggerGame{
	constructor(parentElement){
		this.parentElement = $( parentElement );
		this.mainElement = null;
		this.player = null; 
		this.handleKeyPressOnParent = this.handleKeyPressOnParent.bind(this);
	}
	instantiateFrog(){
		this.player = new Frog();
		var playerElement = this.player.render();
		this.mainElement.append( playerElement );
	}
	addEventHandlers(){
		this.parentElement.on('keypress', this.handleKeyPressOnParent );
	}
	handleKeyPressOnParent(event){
		console.log('passing movement keys to frog')
		var letter = event.key;
		this.player.receiveMove( letter );
	}

	render(){
		this.mainElement = $("<main>",{
			'class': 'gameContainer'
		});
		this.parentElement.append( this.mainElement );
	}
}