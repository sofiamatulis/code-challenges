// # A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
//
// # Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
//
// # A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
//
// # By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:
//
// # It contains no unmatched brackets.
// # The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
//
// # Given a string of brackets, determine whether it is balanced. Return true or false.

// First I will create an array with the characters

// I will check if the number is even or odd, if its odd it will return false. If it is even the code will keep running

// After counting I will compare the last one to the first one and so on till the loop ends


function checkBracket(bracket) {
  console.log('beginning');
  const dictionary = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  const results = [];

  console.log(dictionary, 'bracket');

  if (bracket.length % 2 === 0) {

    for (i = 0; i < bracket.length; i++) {
      if (bracket[0] === bracket[bracket.length-1]) {
        results.push(element);
        console.log("trueee");

      }
      else {
        console.log('here');
        return false
      }
    }

    console.log("end");
    return true;


    // if (bracket[0] === bracket[bracket.length-1] {
    //   results.push(bracket[0]);
    // }
  } else {
    return false
  }
  console.log("false");



}

checkBracket(['{','[',']','}']);


// check while
