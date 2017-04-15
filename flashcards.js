exports.basicCard = 
{
	// Andy Helped me construct this method of object key and property.
	// the question is the Object.key and the answer is the Object.values
	"\n \n \n ===========================\n \n \n [BLANK] was originally grey, but became green to compensate for poor color separation in print.\n \n \n===========================\n \n \n 2-word answer: ": "the hulk",
	
	"\n \n \n===========================\n \n \n Stan Lee put a hyphen in [BLANK]'s name so it would look different from Superman in print.\n \n \n===========================\n \n \n Type your answer with a hyphen: ": "spider-man",
	
	"\n \n \n===========================\n \n \n [BLANK] possesses the infinity glove\n \n \n===========================\n \n \nYour Answer: ": "thanos",	
	
	"\n \n \n===========================\n \n \n Marvel Comics owned the rights to the word [BLANK] from 1975 through 1996, until they realized it was impossible to enforce the trademark.\n \n \n===========================\n \n \nYour Answer: ": "zombie",

	"\n \n \n===========================\n \n \n Jessica Jones and [BLANK] are married to each other.\n \n \n===========================\n \n \nYour Answer: ": "Luke Cage"

}

exports.clozeCard = [
	{
		// This was the method I originally used.
		text: "\n ===========================\n| Wade Wilson, or Deadpool, |\n| is a close copy of DC's   |\n| Slade Wilson, otherwise   |\n| known as Deathstroke.             | \n ===========================	\n ANSWER: ", 
		cloze: "Deathstroke"	
	},
	{
		text: "\n ===========================\n| Stan Lee appears as a cameo    |\n| in almost every Marvel    |\n| super hero movie.         | \n ===========================\n Your Answer: ",
		cloze: "Stan Lee"
	},
	{
		text: "\n ==================================\n| Though Superman's main weakness  |\n| is kryptonite, Superman's        |\n| invulnerability offers no        |\n| protection against magic.          |\n ==================================\n Your Answer: ",
		cloze: "magic"	
	},
	{
		text: "\n ==================================\n| Cyclops, of the X-Men, kills Xavier  |\n| and attacks Emma Frost,          |\n| absorbing her portion of the     |\n| Phoenix Force and elevating to   |\n| Dark Phoenix.                    |\n ==================================\n Your Answer: ",
		cloze: "Cyclops"
	},
	{
		text: "\n ==================================\n| Akihiro, codename Daken, is            |\n| Wolverine's bisexual son.      |\n ==================================\n",
		cloze: "Akihiro"
	}
]