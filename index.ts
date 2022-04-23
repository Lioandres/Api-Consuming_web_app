const acudits=document.getElementById("acudits") as HTMLButtonElement
acudits.addEventListener(`click`,()=>{
    fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            'Accept': 'application/json'
        }
    })
    .then(answer=>answer.json())
    .then(acudit=>console.log(acudit.joke))

})