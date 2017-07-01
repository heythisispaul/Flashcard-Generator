// Pulls in the card constructor:
var BasicCard = require("./BasicCard.js")

// Creates a new card about George Washington using the constructor that was required by the other file:
var washington = new BasicCard("Who was the first president of the United States?", "George Washington");

//Runs the card when the file is loaded:
washington.display();
