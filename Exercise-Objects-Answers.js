// ########## Exercise 01 ##########
var megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };

console.log(megalomaniac.mastermind)
Answer: Joker

console.log(megalomaniac.henchwoman)
Answer: Harley

console.log(megalomaniac.henchWoman)
Answer: Harley

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
Answer: 2018

console.log(megalomaniac.calculateAge())
Answer: 2018 - 1970
48
