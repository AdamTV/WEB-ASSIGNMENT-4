/*
API.JS FOR WEAKEST LINK EMULATION
BY: ADAM STINZIANI
EMAIL: astinziani@myseneca.ca
DATE: 2019-05-30
*/
const xhr = new XMLHttpRequest();
let rand = Math.floor(Math.random() * Math.floor(2000));
//SELECT RANDOM COMIC
let endPoint = `https://xkcd.now.sh/${rand}`;
xhr.open("GET", endPoint);
xhr.send();
//DISPLAY COMIC
displayComic = () => {
    if (xhr.readyState == 4) {

        const jsonResponse = JSON.parse(xhr.responseText);
        const year = document.querySelector("#year");
        const month = document.querySelector("#month");
        const day = document.querySelector("#day");
        const img = document.createElement("img");
        year.innerHTML = jsonResponse.year;
        month.innerHTML = `/ ${jsonResponse.month}`;
        day.innerHTML = `/ ${jsonResponse.day}`;
        num.innerHTML = `<br>Comic # ${jsonResponse.num}`;
        title.innerHTML = jsonResponse.title;
        img.setAttribute("src", jsonResponse.img);
        comic.innerHTML = `${jsonResponse.alt}<br>`;
        comic.appendChild(img);
    }
}
xhr.addEventListener("readystatechange", displayComic);