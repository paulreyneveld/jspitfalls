/* When JS isn't in 'strict mode', JS will force undeclared
 * variables into existence; thus, a = b = 3 will yield a =
 * 3 and b = 3. */

a = b = 3;
console.log(a); // 3
console.log(b); // 3

