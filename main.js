"use strict";

const balloon = document.querySelector(".balloon");
const text = document.querySelector(".text");
const instructions = document.querySelector('.div-instructions');

let size = 200;
balloon.style.height = `${size}px`;
balloon.style.width = `${size}px`;

function changeColor() {
  if (balloon.classList.contains("red")) {
    balloon.classList.remove("red");
    balloon.classList.remove("green");
    balloon.classList.remove("blue");
    balloon.classList.add("green");
  } else if (balloon.classList.contains("green")) {
    balloon.classList.remove("red");
    balloon.classList.remove("green");
    balloon.classList.remove("blue");
    balloon.classList.add("blue");
  } else if (balloon.classList.contains("blue")) {
    balloon.classList.remove("red");
    balloon.classList.remove("green");
    balloon.classList.remove("blue");
    balloon.classList.add("red");
  }
}

function increaseSize() {
  if (size <= 420) {
    size = size + 10;
    balloon.style.height = `${size}px`;
    balloon.style.width = `${size}px`;
  } else {
    text.classList.remove("hidden");
    balloon.classList.add("hidden");
    instructions.classList.add('hidden');
  }
}

function handleReduceSize() {
  if (size > 200 && balloon.classList.contains("red")) {
    size = size - 5;
    balloon.style.height = `${size}px`;
    balloon.style.width = `${size}px`;
    balloon.classList.remove("red");
    balloon.classList.remove("green");
    balloon.classList.remove("blue");
    balloon.classList.add("blue");
  } else if (size > 200 && balloon.classList.contains("blue")) {
    size = size - 5;
    balloon.style.height = `${size}px`;
    balloon.style.width = `${size}px`;
    balloon.classList.remove("red");
    balloon.classList.remove("green");
    balloon.classList.remove("blue");
    balloon.classList.add("green");
  } else if (size > 200 && balloon.classList.contains("green")) {
    size = size - 5;
    balloon.style.height = `${size}px`;
    balloon.style.width = `${size}px`;
    balloon.classList.remove("red");
    balloon.classList.remove("green");
    balloon.classList.remove("blue");
    balloon.classList.add("red");
  }
}

function handleReset() {
  text.classList.add("hidden");
  balloon.classList.remove("hidden");
  instructions.classList.remove("hidden");
  size = 200;
  balloon.style.height = `${size}px`;
  balloon.style.width = `${size}px`;
}

function handleClick(ev) {
  ev.preventDefault();
  changeColor();
  increaseSize();
}

balloon.addEventListener("click", handleClick);
balloon.addEventListener("mouseout", handleReduceSize);
text.addEventListener("click", handleReset);
