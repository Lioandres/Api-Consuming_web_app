const boton=document.getElementById("data")
boton.addEventListener('click', ()=>{
    fetch("https://jsonplaceholder.typicode.com/usersss")
    .then(answer=> console.log(answer))
    
})