/* What's wrong with this */
let bar = null;

console.log(typeof bar === "object");

/* The problem is that JS considers null an object. If one wants to make this comparison,
 * one should also include an && that checks if bar is !== null */


