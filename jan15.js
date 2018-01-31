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

function compareBracket(bracketList) {

  const bracketListArray = bracketList.split('');

  const queue = [];

  // for (i = 0; i < ...; i++)
  for (const element of bracketListArray) {
          // if this is an opening bracket....
    if (getOpenBracket(element)) {

      queue.push(element);  // [] => [element], [a, b, c] => [a,b ,c, element]
      console.log('open Bracket', queue);

    } else if (getClosedBracket(element)) {
      // if this is a closing bracket....
      console.log(element, 'here', getCorrespondingBracket(element));

      const currentOpeningBracket = queue.pop();

      if (currentOpeningBracket === getCorrespondingBracket(element)) {
        console.log('matches , keep going');

      } else {
        console.log(`${element} doesnt match`);
        return false;
      }
    } else {
      console.log('not valid');
      // this is neither an opening or closing bracket
    }

  }
  if (queue.length === 0) {
    console.log('true');
    return true;
  }

}
compareBracket('{{}}');


// try to find a bunch of different examples to feed into this and manually check if this is correct
// => write some tests (assertions)

// handle bad input



// check while

// Run a loop of the brackets
//
// Each turn, the input bracket changes.
//
//  I am checking if its opening or closing
//
//  If its opening, push to a new array
//
//  then keep going (console log but dont break the loop)
//
//  check matching balanced by new array last one and the element
//
//  .push and .pop
//
//  Check matching balanced by index and index -1
