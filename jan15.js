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
function getCorrespondingBracket(bracket) {
  const bracketDictionary = {
    "{": "}",
    "[": "]",
    "(": ")",
    "}": "{",
    "]": "[",
    "}": "{"
  }

  return bracketDictionary[bracket];

}

function getOpenBracket(bracket) {
  const openDictionary = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  return openDictionary[bracket];

}

function getClosedBracket(bracket) {
  const closeDictionary = {
    "}": "{",
    "]": "[",
    "}": "{"
  }

  return closeDictionary[bracket];

}

// module.exports = { getCorrespondingBracket: getCorrespondingBracket };

// const result = getCorrespondingBracket(']')  // '}'

// I need to compare them with the dictionary

function compareBracket(bracket) {

  console.log(bracket, 'bracket')

  // for (i = 0; i < bracket.length; i++) {
  //     getOpenBracket(bracket);
  //
  //     getClosedBracket(bracket);
  // }

  bracket.forEach(function(element){
    if (getOpenBracket(element)) {
      console.log('Open Bracket');
    } else {
      console.log('does not match')
    }
  })

  bracket.forEach(function(element){
    if (getCorrespondingBracket(element)) {
      console.log('Matches');
    } else {
      console.log('does not match')
    }
  })


}
// function checkBracket(bracket) {
//   console.log('beginning');
//
//
//
//   // const closing = {
//   //   ")": "(",
//   // }
//
//   dictionary["{"]
//
// )(
//   const results = [];
//
//   console.log(dictionary[key], 'bracket');
//
//   if (bracket.length % 2 === 0) {
//
//     for (i = 0; i < bracket.length; i++) {
//       if (bracket[0] === dictionary[key]) && (bracket[bracket.length-1] === dictionary[value]) {
//         results.push(element);
//         console.log("trueee");
//
//       }
//       else {
//         console.log('here');
//         return false
//       }
//     }
//
//     console.log("end");
//     return true;
//
//
//     // if (bracket[0] === bracket[bracket.length-1] {
//     //   results.push(bracket[0]);
//     // }
//   } else {
//     return false
//   }
//   console.log("false");
//
//
//
// }

compareBracket(['{','}']);


// check while
