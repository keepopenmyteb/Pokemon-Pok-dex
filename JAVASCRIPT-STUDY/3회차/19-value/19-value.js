
/*
const input = document.getElementById("talk")
const button = document.getElementById("push")

input.addEventListener("keyup", function(e){
    console.log(e.target.value)
})

button.addEventListener("click", function(){
    const p = document.createElement("p")
    p.textContent = input.value
    document.body.append(p)
})
*/

const form = document.getElementById("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    const p = document.createElement("p")
    p.textContent = `${event.target.name.value}의
    별명은 ${event.target.nick.value}`
    document.body.append(p)
})
