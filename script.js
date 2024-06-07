/**
 * This file will get loaded by index.html
 */

'use strict';

let clicks = 0;

document.getElementById("add_click_btn").addEventListener("click", add)
document.getElementById("subtract_click_btn").addEventListener("click", subtract)
document.getElementById("reset_click_btn").addEventListener("click", reset)

function add() {
 document.getElementById("click_count").textContent = 
 clicks+1;
 clicks++;
}
function subtract() {
  document.getElementById("click_count").textContent = 
  clicks-1;
  clicks--;
 }
 function reset() {
  document.getElementById("click_count").textContent = 
  clicks=0;
  clicks=0;
 }