let choice = ["Rock", "Paper", "Scissors"];
let randomChoice;
let humanChoice = "";

let humanScore = 0;
let computerScore = 0;

const img1 =
  "./toppng.com-rock-paper-scissors-png-clipart-rock-paper-scissors-784x670.png";
const img2 = "./clipart4288822.png";
const img3 = "./toppng.com-hand-scissors-icon-scissors-hand-icon-1585x1059.png";

const imgsArray = [img1, img2, img3];
let randomImg;

const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const imgsDiv = document.querySelector(".imgs");
const scoreEl = document.getElementById("score-el");

btnOne.addEventListener("click", function () {
  humanChoice = "Rock";
  playGame();
  addImgtoDiv1();
});

btnTwo.addEventListener("click", function () {
  humanChoice = "Paper";
  playGame();
  addImgtoDiv2();
});

btnThree.addEventListener("click", function () {
  humanChoice = "Scissors";
  playGame();
  addImgtoDiv3();
});

function playGame() {
  generateComputerChoice();
  randomImgs();
  playRound();
}

function generateComputerChoice() {
  randomChoice = Math.floor(Math.random() * choice.length);
  return randomChoice;
}

function playRound() {
  if (choice[randomChoice] === "Rock") {
    randomImg = 0;
  } else if (choice[randomChoice] === "Paper") {
    randomImg = 1;
  } else if (choice[randomChoice] === "Scissors") {
    randomImg = 2;
  }

  if (humanChoice === choice[randomChoice]) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "Rock" && choice[randomChoice] === "Paper") ||
    (humanChoice === "Paper" && choice[randomChoice] === "Rock")
  ) {
    console.log("Paper beats Rock");
  } else if (
    (humanChoice === "Rock" && choice[randomChoice] === "Scissors") ||
    (humanChoice === "Scissors" && choice[randomChoice] === "Rock")
  ) {
    console.log("Rock beats Scissors");
  } else if (
    (humanChoice === "Paper" && choice[randomChoice] === "Scissors") ||
    (humanChoice === "Scissors" && choice[randomChoice] === "Paper")
  ) {
    console.log("Scissors beats Paper");
  }
}

function randomImgs() {
  randomImg = Math.floor(Math.random() * imgsArray.length);
}

function addImgtoDiv1() {
  imgsDiv.innerHTML = `
   <div class="imgs">
   <img src="${img1}"/>
   </div>
   `;

  imgsDiv.innerHTML += `
   <div class="imgs">
   <img src="${imgsArray[randomImg]}"/>
   </div>
   `;
}

function addImgtoDiv2() {
  imgsDiv.innerHTML = `
    <div class="imgs">
    <img src="${img2}"/>
    </div>
    `;

  imgsDiv.innerHTML += `
    <div class="imgs">
    <img src="${imgsArray[randomImg]}"/>
    </div>
    `;
}

function addImgtoDiv3() {
  imgsDiv.innerHTML = `
    <div class="imgs">
    <img src="${img3}"/>
    </div>
    `;

  imgsDiv.innerHTML += `
    <div class="imgs">
    <img src="${imgsArray[randomImg]}"/>
    </div>
    `;
}
