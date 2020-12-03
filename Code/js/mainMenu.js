const saveBut = document.querySelector("#save");
const thefirst = document.querySelector("#firstName");
let fn = document.createElement("h1");

var begin = document.createElement("a");
begin.innerHTML = "BEGIN!!!";
begin.setAttribute("href", "../html/game.html");

saveBut.addEventListener("click", save);
saved = localStorage.getItem("Saved");
//CHECK FOR SAVED STATE AND ADD OPTION TO CONTINUE
if (saved) {
  first = localStorage.getItem("firstName");
  last = localStorage.getItem("lastName");
  info = document.createElement("h1");
  info.innerHTML = `CONTINUE PLAYING AS ${first} ${last}`;
  center.appendChild(info);
  let continueGame = document.createElement("a");
  continueGame.setAttribute("href", "../html/game.html");
  continueGame.setAttribute("class", "continueGame");
  continueGame.style.color = "white";
  continueGame.style.fontSize = "300%";
  continueGame.style.textDecoration = "none";
  continueGame.innerHTML = `CONTINUE`;
  center.appendChild(continueGame);
}
function save() {
  const first = document.querySelector("#fn").value;
  const last = document.querySelector("#ln").value;
  const age = document.querySelector("#age").value;
  const gender = document.querySelector("#sex").value;
  //CAPTURE AND VALIDATE USER INFORMATION
  if (first == "" || last == "" || age == "") {
    alert(`Please enter all of the values`);
  }
  else {
    localStorage.setItem("Saved", false);
    begin.style.color = "white";
    begin.style.fontSize = "300%";
    begin.style.position = "relative";
    begin.style.right = "70px";
    container.appendChild(begin);
    alert(`Welcome to the game ${first} ${last}, a ${gender} of age ${age}!!!`);
    localStorage.setItem("firstName", first);
    localStorage.setItem("lastName", last);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
  }
}

