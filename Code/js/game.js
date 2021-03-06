class Question {
  //PROPERTIES OF A QUESTION
  constructor(question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
  }
  //METHOD TO DISPLAY QUESTION WITH 4 POSSIBLE ANSWERS
  display() {
    document.querySelector("#question").innerHTML = this.question;
    for (let i = 0; i < 4; i++)
      showAnswer = selectValue(showAnswer, 4);
    answer1.innerHTML = this.answers[showAnswer[0]];
    answer2.innerHTML = this.answers[showAnswer[1]];
    answer3.innerHTML = this.answers[showAnswer[2]];
    answer4.innerHTML = this.answers[showAnswer[3]];
  }
  //METHOD TO CHECK ANSWER TO ANY QUESTION
  checkAnswer(answer) {
    let check = false;
    if (answer == this.rightAnswer)
      check = true;
    check ? console.log(`CORRECT`) : console.log(`INCORRECT`);
    return check;
  }
}
//BANK OF QUESTONS
const questions = [];
questions.push(new Question("How many days in a week?", [3, 5, 7, 9], 2));
questions.push(new Question("Which of these is not a vowel?", ['A', 'O', 'B', 'U'], 2));
questions.push(new Question("What is 1 + 1?", [0, 1, 2, 3], 2));
questions.push(new Question("What is the first letter of the alphabet?", ['X', 'F', 'A', 'B'], 2));
questions.push(new Question("Which of these is not a primary colour?", ["Red", "Blue", "Green", "Yellow"], 2));
questions.push(new Question("What year did Canada become a country?", [1812, 1857, 1867, 1912], 2));
questions.push(new Question("Which of these is a mammal?", ["Bird", "Plane", "Superman", "Human"], 3));
questions.push(new Question("How many letters in the alphabet?", [27, 13, 19, 26], 3));
questions.push(new Question("How many years in a decade?", [20, 50, 70, 10], 3));
questions.push(new Question("What is the last letter of the alphabet?", ['N', 'Z', 'X', 'T'], 1));
questions.push(new Question("What is 10 - 5 x 2 / 5 - 3?", [1, 3, 5, 9], 2));
questions.push(new Question("A leap year is every which year?", ["Second", "Fourth", "Sixth", "Eighth"], 1));
questions.push(new Question("How many planets in our solar system?", [2, 4, 6, 8], 3));
questions.push(new Question("Which country is also a continent?", ["Canada", "U.S.A", "China", "Australia"], 3));
questions.push(new Question("Which of these is not a programming language?", ["C", "C++", "Amethyst", "Ruby"], 2));
questions.push(new Question("Which of these is a precious stone?", ["Slate", "Bedrock", "Diamond", "Granite"], 2));
questions.push(new Question("What is (6 - 1) x (5 - 3)?", [0, -2, -5, 10], 3));
questions.push(new Question("What is the chemical composition of water?", ["H2O", "C02", "02", "NaCl"], 0));
questions.push(new Question("The human body has how many basic senses?", [5, 4, 3, 2], 0));
questions.push(new Question("Who invented the World Wide Web?", ["Tim Berners-Lee", "Albert Einstein", "Donald Trump", "Arnold Schwarzenegger"], 0));
questions.push(new Question("How many tires are on a regular car?", [4, 3, 2, 1], 0));
questions.push(new Question("Which of these is not a technology company?", ["Ford", "IBM", "Intel", "Apple"], 0));
questions.push(new Question("What came first Coca-Cola or Pepsi?", ["Mountain Dew", "Coca-Cola", "Pepsi", "Dr. Pepper"], 1));
questions.push(new Question("How many months are in a Gregorian calendar year?", [4, 8, 12, 16], 2));
questions.push(new Question("What language is English derived from?", ["French", "Latin", "Arabic", "Greek"], 1));
questions.push(new Question("Where was Michael Jackson born?", ["Canada", "China", "Europe", "USA"], 3));
questions.push(new Question("What is 1 + 2?", [0, 1, 2, 3], 3));
questions.push(new Question("What is 1 + 3?", [0, 1, 4, 3], 2));
questions.push(new Question("What is 1 + 4?", [0, 5, 2, 3], 1));
questions.push(new Question("What is 1 + 5?", [6, 1, 2, 3], 0));
questions.push(new Question("What is 1 + 6?", [0, 7, 2, 3], 1));
questions.push(new Question("What is 1 + 7?", [0, 1, 2, 8], 3));
questions.push(new Question("What is 1 + 8?", [0, 1, 9, 3], 2));
questions.push(new Question("What is 1 + 9?", [0, 10, 2, 3], 1));
questions.push(new Question("What is 1 + 10?", [0, 11, 2, 3], 1));
questions.push(new Question("What is 1 + 11?", [0, 12, 2, 3], 1));
questions.push(new Question("What is 2 + 2?", [0, 1, 2, 4], 3));
questions.push(new Question("What is 2 + 3?", [0, 1, 5, 3], 2));
questions.push(new Question("What is 2 + 4?", [0, 6, 2, 3], 1));
questions.push(new Question("What is 2 + 5?", [7, 1, 2, 3], 0));
questions.push(new Question("What is 2 + 6?", [0, 8, 2, 3], 1));
questions.push(new Question("What is 2 + 7?", [0, 1, 2, 9], 3));
questions.push(new Question("What is 2 + 8?", [0, 1, 10, 3], 2));
questions.push(new Question("What is 2 + 9?", [0, 11, 2, 3], 1));
questions.push(new Question("What is 2 + 10?", [0, 12, 2, 3], 1));
questions.push(new Question("What is 2 + 11?", [0, 13, 2, 3], 1));
questions.push(new Question("What is 3 + 2?", [0, 1, 2, 5], 3));
questions.push(new Question("What is 3 + 3?", [0, 1, 6, 3], 2));
questions.push(new Question("What is 3 + 4?", [0, 7, 2, 3], 1));
questions.push(new Question("What is 3 + 5?", [8, 1, 2, 3], 0));
questions.push(new Question("What is 3 + 6?", [0, 9, 2, 3], 1));
questions.push(new Question("What is 3 + 7?", [0, 1, 2, 10], 3));
questions.push(new Question("What is 3 + 8?", [0, 1, 11, 3], 2));
questions.push(new Question("What is 3 + 9?", [0, 12, 2, 3], 1));
questions.push(new Question("What is 3 + 10?", [0, 13, 2, 3], 1));
questions.push(new Question("What is 3 + 11?", [0, 14, 2, 3], 1));

//GET A RANDOM INTEGER FOR INDEX OF QUESTIONS
getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
//SELECT RANDOM UNIQUE NUMBER(ANSWER) AND ADD INDEX TO ARRAY 
selectValue = (selectedValues, max) => {
  if (selectedValues.length > 0) {
    let found = false;
    do {
      let random = getRandomInt(max);
      let check = false;
      for (let i = 0; i < selectedValues.length && check == false; i++) {
        if (selectedValues[i] == random)
          check = true;
      }
      if (check == false) {
        selectedValues.push(random);
        found = true;
      }
    } while (found == false);
  }
  else {
    selectedValues.push(getRandomInt(max));
  }
  return selectedValues;
}

//DISPLAY LADDER VALUES FOR EACH ROUND
displayLadderValues = () => {
  if (roundNumber == 1) {
    for (let i = 8; i >= 0; i--) {
      let treeItem = document.createElement("div");
      treeItem.setAttribute("id", i);
      treeItem.innerHTML = moneyTree2[i];
      treeItem.style.fontSize = "xx-large";
      tree.appendChild(treeItem);
    }
  }
  if (roundNumber == 2) {
    tree.innerHTML = "";
    for (let i = 5; i >= 0; i--) {
      let treeItem = document.createElement("div");
      treeItem.setAttribute("id", i);
      treeItem.innerHTML = moneyTree1[i];
      tree.appendChild(treeItem);
    }
  }
  if (roundNumber == 3) {
    money.innerHTML = "";
    tree.innerHTML = "";
  }
}

//VARIABLES AND CONSTANTS
const moneyTree2 = [0, 1000, 5000, 10000, 50000, 75000, 125000, 250000, 500000];
const moneyTree1 = [0, 1000, 10000, 75000, 125000, 500000];
let maxQIndex = 54;
let roundNumber = 1;
let currentPrize = 0;
let showAnswer = [];
let answer;
let moneyInTheBank = 0;
let moneyForTheRound = 0;
let moneyFromLastRound = 0;
let maxBankReached = false;
let round3Right = 0;
let q;
let a;
let usedQs = [];
let stopInterval;
let num;

//GET PLAYER INFO FROM LOCAL STORAGE
first = localStorage.getItem("firstName");
last = localStorage.getItem("lastName");
age = localStorage.getItem("age");
gender = localStorage.getItem("gender");



//BUTTON ELEMENTS
const bankButt = document.createElement("button");
const answer1 = document.createElement("button");
const answer2 = document.createElement("button");
const answer3 = document.createElement("button");
const answer4 = document.createElement("button");
const cont = document.createElement("button");

//METHOD TO ASK QUESTION
askQuestion = () => {
  if (roundNumber < 3 && currentPrize > 0 && bank.innerHTML == "") {
    bankButt.innerHTML = "BANK!";
    bankButt.addEventListener("click", addBank);
    bank.appendChild(bankButt);
  }
  if (!saved) {
    q = getRandomInt(maxQIndex);
    maxQIndex--;
  }
  if (maxQIndex < 0) {
    alert(`NO MORE QUESTIONS :(`);
    document.location.reload();
  }
  questions[q].display();
}

//METHOD TO CHECK ANSWER TO QUESTION ACCORDING TO ROUND
answerQuestion = () => {
  if (roundNumber < 3) {
    answer = showAnswer[a];
    if (questions[q].checkAnswer(answer)) {
      currentPrize++;
      document.getElementById(currentPrize).style.color = "red"; //CHANGE CURRENT PRIZE LADDER VALUE TO RED
      document.getElementById(currentPrize - 1).style.color = "white";
      if (roundNumber == 1 && currentPrize == 8)
        addBank();
      if (roundNumber == 2 && currentPrize == 5)
        addBank();
    } else {
      document.getElementById(currentPrize).style.color = "white";
      currentPrize = 0;
      bank.innerHTML = "";
    }
    showAnswer.splice(0, 4);
    questions.splice(q, 1);
    usedQs.push(q);
    askQuestion();
  }
  if (roundNumber == 3) {
    if (questions[q].checkAnswer(showAnswer[a])) {
      round3Right++;
      showAnswer.splice(0, 4);
      questions.splice(q, 1);
      askQuestion();
    }
    else
      num = 1;
    if (roundNumber == 3 && round3Right == 10) { //COUNTER FOR RIGHT ANSWERS ON ROUND 3
      container.innerHTML = `Congratulations!!!<br>${first} ${last}, a ${gender} of age ${age}.<br>You have won $${moneyInTheBank}!!!<br>`;
      cont.addEventListener("click", function () { document.location.reload(); });
      cont.innerHTML = `Click to PLAY AGAIN!`;
      roundNumber = 0;
      container.appendChild(cont);
      answers.innerHTML = "";
      question.innerHTML = "";
      timer.innerHTML = "";
      clearInterval(stopInterval);

    }
  }
}
//ANSWER QUESTION ACCORDING TO BUTTON PRESSED
answerQuestion1 = () => {
  a = 0;
  answerQuestion();
}
answerQuestion2 = () => {
  a = 1;
  answerQuestion();
}
answerQuestion3 = () => {
  a = 2;
  answerQuestion();
}
answerQuestion4 = () => {
  a = 3;
  answerQuestion();
}

//ADD MONEYINTHEBANK TO BANK IF CLICKED OR AUTOMATICALLY AT MAX PRIZE
addBank = () => {
  document.getElementById(currentPrize).style.color = "white";
  bank.removeChild(bankButt);
  if (roundNumber == 1) {
    moneyForTheRound += moneyTree2[currentPrize];
    if (moneyForTheRound >= 500000) {
      moneyForTheRound = 500000;
      moneyInTheBank = moneyForTheRound;
      num = 1;
    }
    else {
      moneyInTheBank += moneyTree2[currentPrize];
    }
  }
  if (roundNumber == 2) {
    moneyForTheRound += moneyTree1[currentPrize];
    if (moneyForTheRound >= 1000000) {
      moneyForTheRound = 1000000;
      moneyInTheBank = moneyForTheRound + moneyFromLastRound;
      num = 1;
    }
    else {
      moneyInTheBank += moneyTree1[currentPrize];
    }
  }
  themoney = document.querySelector("#money");
  themoney.innerHTML = `Money In the Bank: $${moneyInTheBank}`;
  currentPrize = 0;
}

//STARTS NEXT ROUND
nextRound = () => {
  if (container.innerHTML != "")
    container.innerHTML = "";
  if (!saved) {
    currentPrize = 0;
    moneyForTheRound = 0;
  }
  answers.appendChild(answer1);
  answers.appendChild(answer2);
  answers.appendChild(answer3);
  answers.appendChild(answer4);
  displayLadderValues();
  if (roundNumber == 1 && !saved)
    timer.innerHTML = 120; // SET ROUND TIMERS
  if (roundNumber == 2 && !saved) {
    timer.innerHTML = 90;
  }
  if (roundNumber == 3 && !saved) {
    timer.innerHTML = 60;
  }
  num = document.querySelector("#timer").innerHTML;
  stopInterval = setInterval(counter, 1000);
  if (roundNumber < 3)
    askQuestion();
  if (roundNumber == 3) {
    askQuestion();
  }
  if (roundNumber != 3 && currentPrize > 0)
    document.getElementById(currentPrize).style.color = "red";
  if (num == 0)
    counter();
  if (moneyInTheBank > 0)
    money.innerHTML = `Money In the Bank: $${moneyInTheBank}`;
  saved = false;
}

//EVENT LISTENERS FOR ANSWERS
answer1.addEventListener("click", answerQuestion1);
answer2.addEventListener("click", answerQuestion2);
answer3.addEventListener("click", answerQuestion3);
answer4.addEventListener("click", answerQuestion4);

function counter() {
  num--;

  if (num >= 0)
    document.querySelector("#timer").innerHTML = num;
  //IF TIMES UP THEN CLEAR PAGE AND PREP FOR NEXT ROUND
  if (num <= 0) {
    moneyFromLastRound = moneyInTheBank;
    clearInterval(stopInterval);
    document.querySelector("#question").innerHTML = "";
    answer1.value = "";
    answer2.value = "";
    answer3.value = "";
    answer4.value = "";
    timer.innerHTML = "";
    tree.innerHTML = "";
    bank.innerHTML = "";
    answers.innerHTML = "";
    money.innerHTML = "";
    showAnswer.splice(0, 4);
    if (saved)
      roundNumber--;
    if (roundNumber < 3) {
      container.innerHTML = `Round over! You have $${moneyInTheBank} in the bank.<br>`;
      cont.innerHTML = `Click to contine to round ${roundNumber + 1}.`;
      cont.addEventListener("click", nextRound);
    } else {
      cont.innerHTML = `Click to Try Again!!!`;
      cont.addEventListener("click", function () { document.location.reload(); })
      container.innerHTML = `GAME OVER!!! ${first} ${last}, a ${gender} of age ${age}. You are the Weakest Link!!!<br>`;
      roundNumber = 0;
    }
    container.appendChild(cont);
    roundNumber++;
  }
}
//INITIATE SAVE BUTTON
savebutt.addEventListener("click", function () {
  localStorage.setItem("Saved", true);
  localStorage.setItem("usedQs", JSON.stringify(usedQs));
  localStorage.setItem("q", q);
  localStorage.setItem("Round", parseInt(roundNumber));
  localStorage.setItem("QuestionIndex", maxQIndex);
  localStorage.setItem("Timer", num);
  localStorage.setItem("CurrentPrize", currentPrize);
  localStorage.setItem("Bank", parseInt(moneyInTheBank));
  localStorage.setItem("LastBank", moneyFromLastRound);
  save.innerHTML = `SAVED!`;
  setTimeout(function () { save.innerHTML = ""; }, 1500);
});

//LOAD SAVED STATE (IF ANY)
let saved = JSON.parse(localStorage.getItem("Saved"));
if (saved) {
  usedQs = JSON.parse(localStorage.getItem("usedQs"));
  q = JSON.parse(localStorage.getItem("q"));
  roundNumber = JSON.parse(localStorage.getItem("Round"));
  maxQIndex = JSON.parse(localStorage.getItem("QuestionIndex"));
  num = JSON.parse(localStorage.getItem("Timer"));
  currentPrize = JSON.parse(localStorage.getItem("CurrentPrize"));
  moneyInTheBank = JSON.parse(localStorage.getItem("Bank"));
  moneyFromLastRound = JSON.parse(localStorage.getItem("LastBank"));
  timer.innerHTML = num;
  for (let i = 0; i < usedQs.length; i++)
    questions.splice(usedQs[i], 1);
}

//INITIATE GAME SEQUENCE
nextRound();