/* What's weird here? In this IIFE, if JS isn't in 'strict mode',
 * b = 3 is created in the global scope as if it were declared 
 * globally e.g. let b = 3; a is then defined as three from the 
 * forced global declaration of b. The function looks outside of
 * itself to the newly minted global b and allows for the console
 * out within the function; however, the second attempt to parse
 * a, outside of the function, returns undefined because a doesn't
 * exist in the global scope. */

(function() {
  let a = b = 3;
  console.log(a); // 3
}) ();

console.log(typeof a); // undefined
console.log(b); // 3
