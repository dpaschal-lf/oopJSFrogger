

class Car{
	constructor(){
		this.domElement = null;
		this.position = {
			left: null,
			top: null
		};
	}
	render(){
		this.domElement = $("<div>",{
			'class': 'car'
		});
		return this.domElement;
	}
}