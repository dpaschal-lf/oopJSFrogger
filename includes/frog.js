

class Frog{
	constructor(){
		this.domElement = null;
	}
	render(){
		this.domElement = $("<div>").addClass('frog');
		return this.domElement;
	}
}