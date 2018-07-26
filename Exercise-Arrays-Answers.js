// ########## Exercise 01 ##########
var emptyArray = [];
emptyArray.length
Answer: 

multiTypeArray = [0, 1, "two", 
                function () { return 3; }, 
                {value1: 4, value2: 5}, [6, 7]];

console.log(multiTypeArray[0])
Answer:

console.log(multiTypeArray[2])
Answer:

console.log(multiTypeArray[3]())
Answer:

console.log(multiTypeArray[4].value1)
Answer:
    
console.log(multiTypeArray[4]["value2"])
Answer:

console.log(multiTypeArray[5][0])
Answer:

// ########## Exercise 02 ##########
var array = [];
array[0] = 1;
console.log(array)
Answer:

array[1] = 2;
console.log(array)
Answer:

array.push(3);
console.log(array)
Answer:

// ########## Exercise 03 ##########
var fourNumberArray = [1, 2, 3, 4];

console.log(fourNumberArray.length)
Answer:

fourNumberArray.push(5, 6);
console.log(fourNumberArray.length)
Answer:

// ########## Exercise 04 ##########
var array = ["peanut", "butter", "and", "jelly"];
console.log(array.slice(0, 1))
Answer:

console.log(array.slice(0, 2))
Answer:

console.log(array.slice(2, 2))
Answer:

console.log(slice(2, 20))
Answer:

console.log(array.slice(3, 0))
Answer:

console.log(array.slice(3, 100))
Answer:

console.log(array.slice(5, 1))
Answer:

// ########## Exercise 05 ##########
var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }

passedByReference(array);
console.log(array[1])
Answer:

var assignedArray = array;
assignedArray[5] = "changed in assignedArray";
console.log(array[5])
Answer:

var copyOfArray = array.slice()
copyOfArray[3] = "changed in copyOfArray";
console.log(array[3])
Answer:
  
var array = [1, 2];
array.push(3);
console.log(array)
Answer:

var poppedValue = array.pop();
console.log(poppedValue)
Answer:

console.log(array)
Answer:

var array = [1, 2];
array.unshift(3);
console.log(array)
Answer:

shiftedValue = array.shift();
console.log(shiftedValue)
Answer:

console.log(array)
Answer:
