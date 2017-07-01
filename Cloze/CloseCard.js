var req = process.argv[2];

var ClozeCard = function (full, partial, cloze) {
	this.full = full;
	this.partial = partial;
	this.cloze = cloze;
	this.display = function() {
		if (req === "full") {
			console.log(this.full);
		} else if (req === "partial") {
			console.log("... " + this.partial);
		} else if (req === "cloze") {
			console.log(this.cloze);
		} else {
			console.log("Please specify if you'd like to see the 'full', 'cloze', or 'partial' part of the card.");
		}
	}
}

module.exports = ClozeCard;