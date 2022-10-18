'use strict';

let btn = document.querySelector('#btn');
let input = document.querySelector('#text');
let square = document.querySelector('#square');
let circle = document.querySelector('#circle');
let eBtn = document.querySelector('#e_btn');
let range = document.querySelector('#range');

btn.onclick = function() {
    square.style.backgroundColor = input.value;
};

eBtn.style.display = "none";

range.addEventListener ("change", function () {
    circle.style.height = range.value + '%';
    circle.style.width = range.value + '%';
 });