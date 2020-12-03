
class Question
{
  //PROPERTIES OF A QUESTION
  constructor (question, answers, rightAnswer) 
  {
  this.question = question;
  this.answers = answers;
  this.rightAnswer = rightAnswer;
  }
  //METHOD TO DISPLAY QUESTION WITH 4 POSSIBLE ANSWERS
  display() 
  {
   document.querySelector("#question").innerHTML = this.question;
    for(let i = 0; i < 4; i++)
    showAnswer = selectValue(showAnswer, 4); 
    document.querySelector("#answer1").value = this.answers[showAnswer[0]];
    document.querySelector("#answer2").value = this.answers[showAnswer[1]];
    document.querySelector("#answer3").value = this.answers[showAnswer[2]];
    document.querySelector("#answer4").value = this.answers[showAnswer[3]];
        //ROUND CANT BE A FUNCTION!
    //let answer = parseInt(prompt(`Select your answer (1-4) to the following question:\n ${this.question}\n1. ${this.answers[0]}\n2. ${this.answers[1]}\n3. ${this.answers[2]}\n4. ${this.answers[3]}`));
  }
  //METHOD TO DISPLAY QUESTION WITH 2 POSSIBLE ANSWERS
  /*displayLifeLine() 
  {
    alert(`Press 5 to use a lifeline\nYou have ${lifelinesLeft} lifelines remaining.\n OR`);
    let answer = this.display();
    if (answer == 5)
    {
      lifelinesLeft--;
      let removeIndex = [];
      let removedAnswers = 0;
      for(let i = 0; i < 4 && removedAnswers < 1; i++)
      {
      if(i != this.rightAnswer)
      {
        removeIndex.push(i);
        removedAnswers ++;
      }
      }
     answer = parseInt(prompt(`Select your answer (1-4) to the following question:\n ${this.question}\n${removeIndex[0] + 1}. ${this.answers[removeIndex[0]]}\n${this.rightAnswer + 1}. ${this.answers[this.rightAnswer]}\n`));
    }
    return answer;
  }*/
  //METHOD TO CHECK ANSWER TO ANY QUESTION
  checkAnswer(answer)
  {
    let check = false;
    if(answer == this.rightAnswer)
    check = true;
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


//GET A RANDOM INTEGER FOR INDEX OF QUESTIONS
getRandomInt = (max)=>
{
  return Math.floor(Math.random() * Math.floor(max));
}
//SELECT RANDOM UNIQUE QUESTION AND ADD INDEX TO ARRAY 
selectValue = (selectedValues, max)=>
{
  if(selectedValues.length > 0)
    {
      let found = false;
      do
      {
      let random = getRandomInt(max);
      let check = false;
      for(let i = 0; i < selectedValues.length && check == false; i++)
      {
      if(selectedValues[i] == random)
        check = true;
      }
      if(check == false)
      {
        selectedValues.push(random);
        found = true;
      }
      } while (found == false);
    }
  else
    {
      selectedValues.push(getRandomInt(max));
    }
  return selectedValues;
}

//DISPLAY DOLLAR VALUES FOR EACH QUESTION
displayQuestionValues = (round)=>
{
  let a = (round - 1) * 3, b = a + 1, c = b + 1;
console.log(`QUESTION DOLLAR VALUES FOR THE ROUND ARE $${questionValues[a]}, $${questionValues[b]}, $${questionValues[c]} RESPECTIVELY\n`);
}

//PREFORM ROUND 1, 2 & 3
/*round = ()=>
{
  let moneyTree;
  //ENSURES EACH ROUND IS DISTINCT
  roundNumber++;
if(roundNumber == 1)
moneyTree = moneyTree1;
if(roundNumber == 2)
moneyTree = moneyTree2;

  console.log(`\nROUND ${roundNumber}\n`);
  let right = true;

  //displayQuestionValues FOR EACH ROUND
  //displayQuestionValues(roundNumber);

  //ENSURES PLAYER ANSWERS QUESTIONS CORRECTLY TO CLIMB LADDER
  //ALSO ENSURES PROPER CYCLING THROUGH SELECTED QUESTIONS
  //do{
  for(let i = 0; right; i++)
  {
    q = getRandomInt(maxQIndex);
    maxQIndex--;
    questions[q].display();
//if(!timesUP){
    if(questions[q].checkAnswer(answer))
    {
      console.log(`CORRECT!`);
      currentPrize = moneyTree[i + 1];
    } else{
        console.log(`INCORRECT.`);
        right = false;
      }
  //}
  thetimesUP = localStorage.getItem("timer");
}
  questions.splice(q,1);
  thetimesUP = localStorage.getItem("timer");
//}while(!timesUP);
  /*if(right == true && roundNumber < 3)
  {
    let walk=prompt(`You may walk away with $${questionValues[roundNumber * 3 - 1]}\nPress 0 to walk away, any other key to continue.`);
    if(walk == 0)
    {
      walkAway = true;
      prizeIndex = roundNumber * 3 - 1;
    }
  }
  return right;
}*/

//DEFAULT PRIZE VALUE MAXIMUM PLAYER MAY CHOOSE TO WALK AWAY WITH LESS
const moneyTree1 = [0, 1000, 5000, 10000, 50000, 75000, 125000, 250000, 500000];
const moneyTree2 = [0, 1000, 10000, 75000, 125000, 500000];
let maxQIndex = 24;
let lifelinesLeft = 2;
let questionsIndex = [];
var correct = true, walkAway = false, prizeIndex = 8, roundNumber = 0, thetimesUP = false;
let currentPrize = 0;
let showAnswer = [];
let answer;
game = ()=>{
//CAPTURE PLAYER ENTIRE NAME
//let fullName=prompt(`Please enter your entire name`);
//alert(`WELCOME TO WHO WANTS TO BE A MILLIONAIRE.JS ${fullName}!!!`);

//ENSURES GAME HAS 3 ROUNDS, PLAYER DOES NOT LOSE ANY ROUNDS OR WALK AWAY
for(let i = 1; i < 4 && correct == true && walkAway == false; i++)
  correct = round();

  //IF PLAYER WINS OR WALKS AWAY AT ANY GIVEN POINT
//if(correct == true)
 // console.log(`\nCongratulations ${fullName}!!! You have won $${questionValues[prizeIndex]}!!!`);
}
answer1.addEventListener("click", function () {answer = 0;});
answer2.addEventListener("click", function () {answer = 1;});
answer3.addEventListener("click", function () {answer = 2;});
answer4.addEventListener("click", function () {answer = 3;});

first = localStorage.getItem("firstName");
last = localStorage.getItem("lastName");
age = localStorage.getItem("age");
gender = localStorage.getItem("gender");


//alert(`Hi`);
game();


