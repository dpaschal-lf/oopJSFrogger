

class Mobile{
	constructor(){
		this.domElement = null;
		this.position = {
			left: null,
			top: null
		};
	}
	placeAtPosition(newX, newY){
		this.domElement.css({
			left: newX+'px',
			top: newY+'px'
		})		
	}

}