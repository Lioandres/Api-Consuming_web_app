"use strict";
const startButton = document.getElementById("startButton");
const nextJokeButton = document.getElementById("nextJokeButton");
const joke = document.getElementById("acudits");
let objectJoke;
let chuckNorris = true;
//excercici 1-2
fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'User-Agent': 'My Library (https://github.com/username/repo)'
    }
})
    .then(answer => answer.json())
    .then(acudit => {
    console.log(acudit.joke);
    objectJoke = {
        joke: acudit.id,
        score: 1,
        date: ""
    };
    const joke = document.getElementById("joke");
    joke.textContent = `${acudit.joke}`;
});
nextJokeButton.addEventListener(`click`, () => {
    if (chuckNorris === false) {
        fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'My Library (https://github.com/username/repo)'
            }
        })
            .then(answer => answer.json())
            .then(acudit => {
            console.log(acudit.joke);
            objectJoke = {
                joke: acudit.id,
                score: 1,
                date: ""
            };
            const joke = document.getElementById("joke");
            joke.textContent = `${acudit.joke}`;
            chuckNorris = true;
        });
        column1.classList.remove("blob4");
        column1.classList.add("blob1");
        column2.classList.remove("blob5");
        column2.classList.add("blob2");
        column3.classList.remove("blob6");
        column3.classList.add("blob3");
    }
    else
        showChuckNorris();
});
// exercici 3
let reportAcudits = [];
function toScore(score) {
    if (score === 1)
        objectJoke.score = 1;
    if (score === 2)
        objectJoke.score = 2;
    if (score === 3)
        objectJoke.score = 3;
    const d = new Date();
    objectJoke.date = d.toISOString();
    if (!reportAcudits.find(element => element.joke === objectJoke.joke))
        reportAcudits.push(objectJoke);
    console.log(reportAcudits);
}
// exercici 4
fetch("https://api.openweathermap.org/data/2.5/weather?id=3128760&units=metric&lang=sp&appid=8e42f1a13fa0e057ce270526d580687f")
    .then(answer => answer.json())
    .then(answerJson => {
    const weather = document.getElementById("weather");
    weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${answerJson.weather[0].icon}@2x.png" alt=""> | ${answerJson.main.temp} ºC `;
});
// exercici 5
function showChuckNorris() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(answer => answer.json())
        .then(answerJson => {
        console.log(answerJson.value);
        objectJoke = {
            joke: answerJson.id,
            score: 1,
            date: ""
        };
        const joke = document.getElementById("joke");
        joke.textContent = `${answerJson.value}`;
        chuckNorris = false;
        column1.classList.remove("blob1");
        column1.classList.add("blob4");
        column2.classList.remove("blob2");
        column2.classList.add("blob5");
        column3.classList.remove("blob3");
        column3.classList.add("blob6");
    });
}
// exercici 6
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");
const column3 = document.getElementById("column3");
