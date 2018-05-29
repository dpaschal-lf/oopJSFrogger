

class Mobile{
	constructor(moveDistance=0, parentSizeCallback = function(){}, removalCallback = ()=>{}){
		this.domElement = null;
		this.parentRemoveChildCallback = removalCallback;
		this.position = {
			left: null,
			top: null
		};
		this.size = {
			height: null,
			width: null
		}
		this.getParentSize = parentSizeCallback;
		this.parentSize = {
			height: null,
			width: null
		}
		this.moveTarget = this.initialMove;
		this.moveDistance = moveDistance;
		this.heartbeatFunctions = [];
		this.heartBeatInterval = 50;
		var intervalsPerSecond = 1000 / this.heartBeatInterval;
		this.movementPerInterval = moveDistance / intervalsPerSecond;
		
		this.heartbeatTimer = null;
		this.processHeartbeat = this.processHeartbeat.bind( this );
	}
	move(xPer, yPer){
		this.moveTarget(xPer, yPer);
	}
	initialMove(xPer, yPer){
		debugger;
		this.size.height = this.domElement.height();
		this.size.width = this.domElement.width();
		var parentSizeObject = this.getParentSize();
		this.parentSize.width = parentSizeObject.width;
		this.parentSize.height = parentSizeObject.height;
		this.position = this.domElement.position();
		this.moveTarget = this.subsequentMove;
		this.subsequentMove(xPer, yPer);
	}
	subsequentMove(xPer, yPer){
		var newX = this.movementPerInterval * xPer + this.position.left;
		var newY = this.movementPerInterval * yPer + this.position.top;
		this.placeAtPosition(newX, newY);
	}
	placeAtPosition(newX, newY){
		this.domElement.css({
			left: newX+'px',
			top: newY+'px'
		})
		this.position.left = newX;
		this.position.top = newY;
	}
	startHeartbeat(){
		if(this.heartbeatTimer!==null){
			this.endHeartbeat();
		}
		this.heartbeatTimer = setInterval( this.processHeartbeat, this.heartBeatInterval)
	}
	stopHeartbeat(){
		clearInterval( this.heartbeatTimer );
		this.heartbeatTimer = null;
	}
	addUpdateFunction(functionRef){
		this.heartbeatFunctions.push( functionRef );
	}
	processHeartbeat(){
		for(var functionIndex = 0; functionIndex < this.heartbeatFunctions.length; functionIndex++){
			this.heartbeatFunctions[ functionIndex ]();
		}
	}
	die(){
		this.domElement.remove();
	}

}



