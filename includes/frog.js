

class Frog extends Mobile{
	constructor(){
		super();
		this.move = this.initialMove;
	}

	receiveMove(direction){
		debugger;
		switch( direction ){
			case 'w': 
				this.move(0, -1);
				break;
			case 'a':
				this.move(-1, 0);
				break;
			case 'd':
				this.move(1, 0);
				break;
			case 's':
				this.move(0, 1);
				break;
		}
	}
	initialMove( deltaX, deltaY ){
		console.log('initial move called')
		this.size = {
			height: this.domElement.height(),
			width: this.domElement.width()
		}
		this.move = this.subsequentMove;
		this.move(deltaX, deltaY);		
	}
	subsequentMove( deltaX, deltaY ){
		console.log(`moving : ${deltaX}, ${deltaY}`);
		var position = this.domElement.offset();
		var newX = position.left + ( deltaX * this.size.width );
		var newY = position.top + ( deltaY * this.size.height );
		this.placeAtPosition( newX, newY);
	}
	render(){
		this.domElement = $("<div>").addClass('frog');
		return this.domElement;
	}
}