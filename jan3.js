const a = [1,2,3];

// const b = [];

// a.forEach(function(element){
//   b.push(element + 1);
// })

var b = a.map(function (element){
  return element + 1;
})


console.log(b, 'test');

// for i loop -> just a loop. You have more control over the loop instead of the for each. You have the (i)
// for each --> it runs through the loop n times and returns a new element (a sum, a new array etc). Walk through the elements of the array
// Map --> it runs through the loop n times and returns a new array with the same shape/length (initially 5 elements, at the end with 5 elements)
