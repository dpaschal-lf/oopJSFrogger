

class FroggerGame{
	constructor(parentElement){
		this.parentElement = $( parentElement );
		this.mainElement = null;
		this.player = null;
	}
	instantiateFrog(){
		this.player = new Frog();
		var playerElement = this.player.render();
		this.mainElement.append( playerElement );
	}
	render(){
		this.mainElement = $("<main>",{
			'class': 'gameContainer'
		});
		this.parentElement.append( this.mainElement );
	}
}