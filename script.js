/**
 * This file will get loaded by index.html
 */

'use strict';

let clicks = 0;

document.getElementById("my_button").addEventListener("click", my_func)

function my_func() {
  console.log("I was clicked!")
}