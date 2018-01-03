//
// You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."
//
// It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.
//
// The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.
//
// For example:
//
// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
// What is the solution to your captcha?



// 1- create a function that takes a number
// 2- create an empty array
// 4- Create a loop to compare the 1st number to the one next to it and so on. and then the last one with the first one
// 5- if the digits are the same, add the digit to the array, else just skip it
// sum all of the digits in the array
// 7- else just add a zero

// const if it wont change
// let if it will


function addNumber(number) {
  const results = []
  let sum = 0;
  // number is being converted to a string
  const stringNumber = number.toString();
  // splitting the string into separate digits
  const digits = stringNumber.split('');

  digits.forEach(function(element, index){
    if (element === digits[index+1]) {
      results.push(element);
    }
  })


  // comparing the first one to the last one
  if (digits[0] === digits[digits.length - 1 ]) {
    results.push(digits[0]);
  }

  results.forEach(function(element){
    sum += parseInt(element);
  })
  console.log(sum, 'sum');

}


addNumber(312213);

// the for i loops
// for the for each function --> it runs the function every time the loop runs and it modifies the array
// the map function --> runs the function every time the loop runs and it creates a new array
