// Homework 3

// Exercises1
function fillTheWords(sentence, arr) {
  let result = "";
  let wordIndex = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "_") {
      result += arr[wordIndex++]
        continue;
    } 
     result += sentence[i];

  }

  return result;
}
console.log("Exercises 1");
console.log(fillTheWords("_, we have a _.", ["Houston", "problem"]));
console.log(fillTheWords("If at _ you don’t _, try, try _.", ["first", "succeed", "again"]));
console.log(fillTheWords("May the _ _ _ _." , ["Force", "be", "with", "you"]));



// Exercises2
function arrangeArray (arr) {
	let oddNumbers = [];
	let evenNumbers = [];

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number") {
			if (arr[i] % 2 === 0) {
				evenNumbers.push(arr[i])
			} else {
				oddNumbers.push(arr[i])
			}
		}
	}
	return oddNumbers.concat(evenNumbers)
}

console.log("Exercises 2");
console.log(arrangeArray([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]))
console.log(arrangeArray([8, 8, 'meh', 6]))
console.log(arrangeArray([null, null, 1, undefined, 5, 9, false]))


// Exercises3
let NumandString = arr => {
    if(!Array.isArray(arr)) {
        return 1
    }
    let number = 0;
    let string = 0;
    let result;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        number++;
    } else if (typeof arr[i === "string"]) {
        string++
    }
}
result = `Numbers: ${number} , Strings: ${string}`;
  return result;
}
console.log("Exercises 3");
console.log(NumandString([1, "10", "hi", 2, 3]));
console.log(NumandString([1, 4, 'i am a string', '456']));
console.log(NumandString(7, 21));

// Exercises 4
let MaxAndMin = (arr) => {
    let min = max = arr[0].length;
    let result;
      arr.forEach(element => {
        if (element.length > max) {
          max = element.length;
        }
        if (element.length < min) {
          min = element.length;
        }
      });
  
    result = min + max;
  
    return result;
  }
  console.log("Exercises 4");
  console.log(MaxAndMin(["anymore", "raven", "me", "communicate"]));
  console.log(MaxAndMin(["wish", "slightly", "understand", "longer", "unexpected", "heart"]));
  
  // Exercises 5
  function getSum(arr) {
    let result = 0;
    if (arr.length > 0) {
      arr.forEach(element => {
        result += element;
      });
    } else result = 0;
  
    return result;
  }
  
  console.log("Exercises 5");
  console.log(getSum([1, 12, 4]));
  console.log(getSum([-1, 0, 1, 2]));
  console.log(getSum([]));
  console.log(getSum([-1, 0.4]));
  
  
  // Exercises6
  function Twoelements(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i] * arr[i + 1])
    }
    
    return result;
  }
  
  console.log("Exercises 6");
  console.log(Twoelements([3, 7, 12, 5, 20, 0]));
  console.log(Twoelements([1, 1, 4, 32, 6]));
  
  
  