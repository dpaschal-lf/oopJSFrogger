

class Car extends Mobile{
	constructor(movementSpeed){
		super(movementSpeed);
		debugger;
		this.addUpdateFunction( this.move.bind(this, 1,0 ) );
		this.addUpdateFunction( this.checkForRemoval.bind( this ));
	}
	render(){
		this.domElement = $("<div>",{
			'class': 'car'
		});
		return this.domElement;
	}
	checkForRemoval(){
		
	}
	start(){
		this.startHeartbeat();
	}
	stop(){
		this.stopHeartbeat();
	}
}