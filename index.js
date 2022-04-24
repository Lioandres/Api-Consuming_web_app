"use strict";
const startButton = document.getElementById("startButton");
const nextJokeButton = document.getElementById("nextJokeButton");
const joke = document.getElementById("acudits");
let objectJoke;
let reportAcudits = [];
startButton.addEventListener(`click`, () => {
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
});
nextJokeButton.addEventListener(`click`, () => {
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
});
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
