/* 1. Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the `if...else` construct or a ternary expression - the `Math.max` method is not allowed. */
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9)); //9

/* 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed. */
const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    }
    else if (y >= x && y >= z) {
        return y;
    }
    else {
        return z;
    }
}
maxNum = maxOfThree(180, 190, 990);
console.log(maxNum); //990

/* 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise. */
function isCharAVowel(char) {
    const vowel = ["a", "e", "i", "o", "u"];
    if (vowel.includes(char)) {
        return true
    }
    else {return false}
}

console.log(isCharAVowel("b")); // false
console.log(isCharAVowel("a")); // true

/* 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11. */
const sumArray = function(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
};

console.log(sumArray([2, 4, 5])); // 11

/* 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`. */
function multiplyArray(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

console.log(multiplyArray([2, 4, 5])); // 40

/* 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called. */
const numArgs = function(...args) {
    return args.length
};

console.log(numArgs(2, 3, 4 , "b", 4, 2, "l")); // 7

/* 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "`ratskcor`". */
function reverseString(string) {
    let stringReversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += string[i];
    }
    return stringReversed;
};

console.log(reverseString("rockstar")); // ratskcor

/* 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string. */
const longestStringInArray = function(strings) {
    let lengthiest = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > lengthiest) {
            lengthiest = strings[i].length;
        }
    }
    return lengthiest;
};

console.log(longestStringInArray(["hello my name is mai", "i am slowly figuring this out step by step", "will this work?"])); // 42

/* 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`. */
function stringsLongerThan(stringArr, minLength) {
    let result = [];
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > minLength) {
        result.push(stringArr[i]);
      }
    }
    return result;
  }
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // [ 'hello', 'morning' ]

/* 10. Define a function, as a function expression, `addList` that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return `0` (zero). */
const addList = function(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};
console.log(addList(54, 25, 85, 63, 95, 8888, 4544)); // 13754
console.log(addList()); // 0