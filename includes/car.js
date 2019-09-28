

class Car extends Mobile{
	constructor(configObject){
		super(configObject);
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
		if(this.position.left>this.parentSize.width){
			this.parentRemoveChildCallback( this );
		}
	}
	start(){
		this.startHeartbeat();
	}
	stop(){
		this.stopHeartbeat();
	}
}