cardSide = process.argv[2]; //Takes in the "front" or "back" on the command line


//Constructor: Passes the information from the "new" cards and applies them to each one and displays the side called when requested:
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.display = function() {
		if (cardSide === "front") {
			console.log(this.front);
		} else if (cardSide === "back") {
			console.log(this.back);
		} else {
			console.log("please state if you'd like the 'front' or 'back' of the card.");
		}
	}
}

//exports this for the card files to us:
module.exports = BasicCard;