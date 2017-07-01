cardSide = process.argv[2];

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.display = function() {
		if (cardSide === "front") {
			console.log(this.front);
		} else if (cardSide === "back") {
			console.log(this.back);
		}
	}
}

module.exports = BasicCard;