
const ClozeCard = function(text, cloze) {
	// text will display the full text
	this.text = text;
	// close will only display a portion of the text
	this.cloze = cloze;



	this.clozeDelete = function() {
		// only the close deleted portion of the text is returned
		// so the answer
		console.log(cloze);
	}

	this.partialText = function() {
		// only partial text
		// the question minus the answer
		console.log(' ... ' + text);
		// I created a replace function that didn't work as intended
	// 	var replace = function(text,ignoreSpaces,start,stop){
	// 	  var output = "";
	// 	  for (var i = 0; i < text.length; i++){
	// 	    if (i < start || i > stop) {
	// 	      output += text.charAt(i);
	// 	    } else {
	// 	      if ((text.charAt(i) != ' '|| ignoreSpaces) && text.charAt(i) != '\n') {
	// 	        output += "\u2588";
	// 	      }
	// 	      else {
	// 	        output += text.charAt(i);
	// 	      }
	// 	    }
	// 	  }
	// 	  return output;
	// 	}
	// }

	this.fullText = function(){
		// the entire text
		// the full answer
		console.log(this.fullText)
	}
}

module.exports = ClozeCard;