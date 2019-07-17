// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    //debugger;
  }

  return reversed;
}

//reverse('asfd');

module.exports = reverse;

/** Version 1 */
/*
function reverse(str) {
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    return str
      .split("")
      .reverse()
      .join("");
  }
*/

/** Version 2 */
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

/** Version 3 */
// function reverse(str) {
//   //debugger;
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
