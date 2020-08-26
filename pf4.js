/* Strangely, it's not immediately obvious how
 * one determines whether or not an object is empty.
 * The following is one means of answering that question. 
 */

function isEmpty(obj) {
  for (let key in obj) { // This loop will only begin if there is an initial key.
  	return true;
  }
  return false; 
}

let empty = {};
let existing = {is: 3};

console.log(isEmpty(empty));
console.log(isEmpty(existing));
