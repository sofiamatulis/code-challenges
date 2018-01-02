// 1- create a function that takes a number
// 2- create an empty array
// 4- Create a loop to compare the 1st number to the one next to it and so on. and then the last one with the first one
// 5- if the digits are the same, add the digit to the array, else just skip it
// sum all of the digits in the array
// 7- else just add a zero


function addNumber(number) {
  const digits = []
  const results = []
  var sum = 0;
  // number is being converted to a string
  number = number.toString();
  // looping through the string
  for (i = 0; i < number.length; i++) {
    // converting the string to a number
    // number = parseFloat(number);
    // digits.push(+number.charAt(i));
    // adding it to the array
    digits.push(number[i]);

  }
  // looping through the string and comparing it
  for (i = 0; i < digits.length; i++) {
    if (digits[i] === digits[i+1]) {
      results.push(digits[i]);
    }
  }

  if (digits[0] === digits[digits.length - 1 ]) {
    results.push(digits[0]);
  }

  for (i=0; i < results.length; i++){
    sum += parseInt(results[i]);
  }
  console.log(sum);

}

addNumber(11);

// There are 3 JavaScript methods that can be used to convert variables to numbers:
//
// The Number() method
// The parseInt() method
// The parseFloat() method


// /The charAt() method returns the character at the specified index in a string.
