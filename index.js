"use strict";
const startButton = document.getElementById("startButton");
const nextJokeButton = document.getElementById("nextJokeButton");
const joke = document.getElementById("acudits");
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
        const joke = document.getElementById("joke");
        joke.textContent = `${acudit.joke}`;
    });
});
