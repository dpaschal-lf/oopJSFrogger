

class Frog{
	constructor(){
		this.domElement = null;
	}
	move(direction){
		switch( direction ){
			case 'w': 
				console.log('going up');
				break;
			case 'a':
				console.log('going left');
				break;
			case 'd':
				console.log('going right');
				break;
			case 's':
				console.log('going down');
				break;
		}
	}
	render(){
		this.domElement = $("<div>").addClass('frog');
		return this.domElement;
	}
}