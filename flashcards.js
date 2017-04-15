exports.basicCard = 
{
	// Andy Helped me construct this method of object key and property.
	// the question is the Object.key and the answer is the Object.values
	"\n \n \n ===========================\n \n \n [BLANK] was originally grey, but became green to compensate for poor color separation in print.\n \n \n===========================\n \n \nYour Answer (1 word): ": "hulk",
	
	"\n \n \n===========================\n \n \n Stan Lee put a hyphen in [BLANK]'s name so it would look different from Superman in print.\n \n \n===========================\n \n \nYour Answer (with hyphen): ": "spider-man",
	
	"\n \n \n===========================\n \n \n [BLANK] possesses the infinity glove\n \n \n===========================\n \n \nYour Answer: ": "thanos",	
	
	"\n \n \n===========================\n \n \n Marvel Comics owned the rights to the word [BLANK] from 1975 through 1996, until they realized it was impossible to enforce the trademark.\n \n \n===========================\n \n \nYour Answer: ": "zombie",

	"\n \n \n===========================\n \n \n Jessica Jones and [BLANK] are married to each other.\n \n \n===========================\n \n \nYour Answer: ": "Luke Cage"

}

exports.clozeCard = [
	{
		// This was the method I originally used.
		text: "\n \n \n ===========================\n \n \n Wade Wilson, or Deadpool, is a close copy of DC's Slade Wilson, otherwise known as Deathstroke.\n \n \n ===========================\n \n \n ", 
		cloze: "Deathstroke"	
	},
	{
		text: "\n \n \n ===========================\n \n \n Stan Lee appears as a cameo in almost every Marvel super hero movie.\n \n \n ===========================\n \n \n ",
		cloze: "Stan Lee"
	},
	{
		text: "\n \n \n ===========================\n \n \n Though Superman's main weakness is kryptonite, Superman's invulnerability offers no protection against magic.\n \n \n ===========================\n \n \n ",
		cloze: "magic"	
	},
	{
		text: "\n \n \n ===========================\n \n \n Cyclops, of the X-Men, kills Xavier and attacks Emma Frost, absorbing her portion of the Phoenix Force and elevating to Dark Phoenix.\n \n \n ===========================\n \n \n ",
		cloze: "Cyclops"
	},
	{
		text: "\n \n \n ===========================\n \n \n Akihiro, codename Daken, is Wolverine's bisexual son.\n \n \n ===========================\n \n \n ",
		cloze: "Akihiro"
	}
]