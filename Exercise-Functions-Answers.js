// ########## Exercise 01 ##########
function add(a, b) {
  return a + b;
}

console.log(add(1, 2))
Answer:

// ########## Exercise 02 ##########
var message = "Outer";
function getMessage() {
  return message;
}

function overrideMessage() {
  var message = "Inner";
  return message;
}

console.log(getMessage())
Answer: 

console.log(overrideMessage())
Answer:
    
console.log(message)
Answer:

// ########## Exercise 03 ##########
var variable = "top-level";
function parentfunction() {
  var variable = "local";
  function childfunction() {
    return variable;
  }
  return childfunction();
}

console.log(parentfunction())
Answer:

// ########## Exercise 04 ##########
makeMysteryFunction(makerValue) {
  var newFunction = function doMysteriousThing(param) {
    return makerValue + param;
  };
  return newFunction;
};

var mysteryFunction3 = makeMysteryFunction(3);
var mysteryFunction5 = makeMysteryFunction(5);

console.log(mysteryFunction3(10) + mysteryFunction5(5))
Answer:

// ########## Exercise 05 ##########
function returnFirstArg(firstArg) {
  return firstArg;
}

console.log(returnFirstArg("first", "second", "third"))
Answer:


function returnSecondArg(firstArg, secondArg) {
  return secondArg;
}

console.log(returnSecondArg("only give first arg"))
Answer:

function returnAllArgs() {
  var argsArray = [];
  for (var i = 0; i < arguments.length; i += 1) {
    argsArray.push(arguments[i]);
  }
  return argsArray.join(",");
}

console.log(returnAllArgs("first", "second", "third"))
Answer:

// ########## Exercise 06 ##########
var appendRules = function(name) {
  return name + " rules!";
};

var appendDoubleRules = function(name) {
      return name + " totally rules!";
};

var praiseSinger = { givePraise: appendRules };
console.log(praiseSinger.givePraise("John"))
Answer:

praiseSinger.givePraise = appendDoubleRules;
console.log(praiseSinger.givePraise("Mary"))
Answer:
