const startButton=document.getElementById("startButton") as HTMLButtonElement
const nextJokeButton=document.getElementById("nextJokeButton") as HTMLButtonElement
const joke=document.getElementById("acudits") as HTMLButtonElement

startButton.addEventListener(`click`,()=>{
    fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            'Accept': 'application/json',
            'User-Agent': 'My Library (https://github.com/username/repo)'
        }
    })
    .then(answer=>answer.json())
    .then(acudit=>{
        console.log(acudit.joke)
        const joke=document.getElementById("joke") as HTMLParagraphElement
        joke.textContent=`${acudit.joke}` 
    })

})

nextJokeButton.addEventListener(`click`,()=>{
    fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            'Accept': 'application/json',
            'User-Agent': 'My Library (https://github.com/username/repo)'
        }
    })
    .then(answer=>answer.json())
    .then(acudit=>{
        console.log(acudit.joke)
        const joke=document.getElementById("joke") as HTMLParagraphElement
        joke.textContent=`${acudit.joke}` 
    })

})