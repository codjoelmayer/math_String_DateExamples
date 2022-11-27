// Math methods
/*
Constant: Math.PI
*/
// console.log(Math.PI);
// Number to integer
/*
Math.round()
Math.ceil()
Math.floor()
Math.trunc()
*/
let number = 23.4;
// console.log("number: ", number);
// Will rounded to its nearest integer
// console.log("Math.round():", Math.round(number));
// Will rounded up to the nearest integer
// console.log("Math.ceil():", Math.ceil(number));
// Will rounded down to the nearest integer 
// console.log("Math.floor():", Math.floor(number));
// Will return only the integer
// console.log("Math.trunc():", Math.trunc(number));

// Math.sign: returns -1 if argument is negative, null or positive (1), 0 if is null
// let negNumb = 9;
// console.log("Math.sign(negNumb):",Math.sign(negNumb));
// 3 to the power of 2 or 3 ^ 2
// console.log("pow(x, y):", Math.pow(3, 2));
 
// console.log("Math.sqrt(x): ",Math.sqrt(36));

// Math.abs(): Return the absolute value of the argument
// console.log(Math.abs(-30));
// Max: will return the highest number within a collection of data.
// let numbers = [8, 4, 11, 3];
// console.log("max: ", Math.max(...numbers));
// Min(): will return the smallest number within a collection.
// console.log("min: ", Math.min(...numbers));
//random(): Allow us to generate numbers from 0 -1
// let genNumbers = Math.random();
// console.log(genNumbers);
// Let display number from 0 - 10
// console.log(Math.trunc(genNumbers * 11));
// max(), min(), random()

// String methods
// let sentence = 'I love programming';
// using a square bracket to display the first character
// console.log("[0]:", sentence[0]);
// charAt(): Return a character at a specific position or index
// Take note that the computer starts counting from 0 when dealing with index or position.
// console.log("charAt():",sentence.charAt('o'));
// The concatenation method will join two or more strings together.
// console.log("concat(): ", sentence.concat(" and database"));
// Check if a string ends with a specific character or word.
// console.log("endsWith(programming):", sentence.endsWith("programming"));
// console.log("endsWith(t):", sentence.endsWith("t"));
// includes() determine whether a character or word was found within a string 
// console.log("includes('love'):", sentence.includes('love'));
// indexOf(''): will return the position or index of an argument.
// console.log("indexOf('programming'): ", sentence.indexOf('programming'));
// Return -1 if it wasn't found.
// console.log("indexOf('y'): ", sentence.indexOf('y'));
// lastIndexOf(): will return the last occurrence of a character or a word in a string.
// console.log("lastIndexOf(o):", sentence.lastIndexOf('o'));
// length - property: will return the size of a thing In this case, it will return the total number of characters.
// console.log("length: ", sentence.length);
// match(): It uses a regexp as an input to validate a string. If a match is found, this will return the match as an array; otherwise, it will return null.
// console.log("match(/\D/): ", sentence.match(/\p\D*\g/));
// repeat(): Returns a String value constructed by appending count copies together. If the count is 0, the empty string is returned.
// console.log("repeat():", sentence.repeat());
// console.log("repeat(2):", sentence.repeat(2));
// replace(): will return a new string by modifying the existing string into a new one.
// console.log("replace(current, new one): ", sentence.replace("programming", "database"));
// console.log("replace(/regexp/): ", sentence.replace(/\o/g, "*"));
// search(): It is used to find a match between a regular expression and a string object and return the result as an index. -1 if it was not found. 
// console.log("search(/\p/): ", sentence.search(/\p/));
// console.log("search(/\d/): ", sentence.search(/\d/));

// slice(start, end): will extract part of a string
// If you omit the second argument, it will read the rest of the string.
// get indexof(p) 
// let index = sentence.indexOf('p');
// console.log("slice(): ", sentence.slice(index));

// split(): will split a string based on the argument and return an array.
// console.log("split(' '): ", sentence.split(' '));
// console.log("split(''): ", sentence.split(''));

// startsWith(): Check whether a string starts with a specific character or word.
// console.log("startsWith(i): ", sentence.startsWith('i'));
// console.log("startsWith(I): ", sentence.startsWith('I'));

// substring(start, end): will return a new string based on the two arguments.
// console.log("substring(start, end): ", sentence.substring(0, sentence.indexOf('e')+1));

// toLowerCase(): convert a string to lowercase.
// console.log("toLowerCase(): ", sentence.toLowerCase());
// toUpperCase(): convert a string to upper case.
// console.log("toUpperCase(): ", sentence.toUpperCase());
// toString(): convert another data type to a string.

/*
charAt()
concat()
endsWith()
includes()
indexOf()
lastIndexOf()
property: length 
match()
repeat()
replace()
search()
slice()
split()
startsWith()
substring()
toLowerCase()
toUpperCase()
toString()
trim()
trimEnd()
trimStart()
valueOf() : Return a primitive value of a string or object
*/
// let sentence = "I love programming";
// console.log(sentence[0]);
// let index = 3;
// console.log(`charAt(${index}): ${sentence.charAt(index)}`);
// console.log(`concat(): ${sentence.concat(' and database.')}`);
// console.log(`endsWith(): ${sentence.endsWith(' and database.')}`);
// console.log(`includes(): ${sentence.includes('love')}`);
// indexOf(what to search for, optional : where to start from)
// console.log(`indexOf(): ${sentence.indexOf('g')}`);
// console.log(`lastIndexOf(): ${sentence.lastIndexOf('g')}`);
// Will return null if nothing was found
// const re = new RegExp('/l*e/');
// console.log(`match(): ${sentence.match('love')}`);
// console.log(`match(\s): ${sentence.match('\s')}`);
// console.log(`match(): ${sentence.match(re)}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// console.log(`(): ${sentence.concat(' and database.')}`);
// Date ==

let myDate = new Date();
// Add days to the current date
// Current date
let currentDate = myDate.getDate();
console.log("setDate(): ", new Date(myDate.setDate(currentDate + 5)));
