exports.basicCard = 
{
	// Andy Helped me construct this method of object key and property.
	// the question is the Object.key and the answer is the Object.values
	"===========================\n ... was originally grey, but became green to compensate for poor color separation in print.\n ===========================\n Your Answer (1 word): ": "hulk",
	"===========================\n Stan Lee put a hyphen in ...'s name so it would look different from Superman in print.\n===========================\n Your Answer (with hyphen): ": "spider-man",
	"===========================\n ... was originally intended as a new direction for Nick Fury and S.H.I.E.L.D.\n===========================\n Your Answer: ": "gi joe",	
	"===========================\n Marvel Comics owned the rights to the word ... from 1975 through 1996, until they realized it was impossible to enforce the trademark.\n===========================\n Your Answer: ": "zombie"
}

exports.clozeCard = [
	{
		// This was the method I originally used.
		text: "the Hulk was originally grey, but became green to compensate for poor color separation in print.", 
		cloze: "the Hulk"	
	},
	{
		text: "Stan Lee put a hyphen in Spider-Man’s name so it would look different from Superman in print.",
		cloze: "spiderman"
	},
	{
		text: "G.I. Joe was originally intended as a new direction for Nick Fury and S.H.I.E.L.D.",
		cloze: "G.I. Joe"	
	},
	{
		text: "Marvel Comics owned the rights to the word zombie from 1975 through 1996, until they realized it was impossible to enforce the trademark.",
		cloze: "zombie"
	}		
]