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

	
};

module.exports = ClozeCard;