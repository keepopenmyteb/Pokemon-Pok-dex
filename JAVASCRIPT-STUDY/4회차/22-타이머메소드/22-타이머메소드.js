const button = document.getElementById("stop")

let timetId;
timetId = setInterval(function(){
    const p = document.getElementById("now")

    const now = new Date()

    let year = now.getFullYear()
    let moth = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    p.textContent = `${year}/${moth}/${day} ${hour}:${min}:${sec}`

}, 1000)

button.addEventListener("click", function(){
    clearInterval(timetId)
})