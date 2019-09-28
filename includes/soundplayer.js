

class SoundPlayer{
	constructor(){
		this.muted = true;
		this.playingSounds = {}
	}
	removeSound(id){
		delete this.playingSounds[id];
	}
	mute(){
		this.muted = true;
	}
	unmute(){
		this.muted = false;
	}
	play( sound ) {
		if(!this.muted){
			const timeStamp = window.performance.now();
			const soundPlayer = {
				player: new Audio(sound),
				id: timeStamp,
			}
			soundPlayer.remove = this.removeSound(this, timeStamp);
			soundPlayer.onpause = function(){
				this.remove();
			}
			this.playingSounds[timeStamp] = SoundPlayer; 
			soundPlayer.player.play();
		}
	}
}