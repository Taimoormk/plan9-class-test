// ########## Exercise 01 ##########
var megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };

console.log(megalomaniac.mastermind)
Answer:

console.log(megalomaniac.henchwoman)
Answer:

console.log(megalomaniac.henchWoman)
Answer:

// ########## Exercise 02 ##########
var currentDate = new Date();
var currentYear = (currentDate.getFullYear());

var megalomaniac = {
  mastermind: "James Wood",
  henchman: "Adam West",
  birthYear: 1970,
  calculateAge: function () {
    return currentYear - this.birthYear;
  }
};

console.log(currentYear)
Answer:

console.log(megalomaniac.calculateAge())
Answer: