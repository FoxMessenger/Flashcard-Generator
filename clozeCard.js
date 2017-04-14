function ClozeCard (text, cloze) {
	// text will display the full text
	this.text = text;
	// close will only display a portion of the text
	this.cloze = cloze;

	this.answer = function() {
		// only the close deleted portion of the text is returned
		// so the answer
		console.log(cloze);
	};

	this.partialText = function() {
		// only what we want to see, minus the answer
		console.log(text.replace(cloze, ' ... '));
	}
}

module.exports = ClozeCard;