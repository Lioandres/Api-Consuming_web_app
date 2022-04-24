const startButton=document.getElementById("startButton") as HTMLButtonElement
const nextJokeButton=document.getElementById("nextJokeButton") as HTMLButtonElement
const joke=document.getElementById("acudits") as HTMLButtonElement
interface jokes {joke:string; score:number;date:string}
let objectJoke:jokes
let reportAcudits:jokes[]=[]

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
        objectJoke={
            joke:acudit.id,
            score:1,
            date:""
        }
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
        objectJoke={
            joke:acudit.id,
            score:1,
            date:""
        }
        const joke=document.getElementById("joke") as HTMLParagraphElement
        joke.textContent=`${acudit.joke}` 
    })

})


function toScore(score:number):void{

        if(score===1) objectJoke.score=1
        if(score===2) objectJoke.score=2
        if(score===3) objectJoke.score=3
        const d=new Date();
        objectJoke.date= d.toISOString();
        if (!reportAcudits.find(element=>element.joke===objectJoke.joke)) reportAcudits.push(objectJoke)
        console.log(reportAcudits)

}        
    




