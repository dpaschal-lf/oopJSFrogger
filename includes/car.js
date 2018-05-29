

class Car extends Mobile{
	render(){
		this.domElement = $("<div>",{
			'class': 'car'
		});
		return this.domElement;
	}
}