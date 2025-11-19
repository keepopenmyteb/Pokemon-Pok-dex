const p = document.getElementById("now")

const now = new Date()
// const then = new Date(1992, 11, 12, 12, 30, 45)

let year = now.getFullYear()
let moth = now.getMonth() + 1
let day = now.getDate()
let hour = now.getHours()
let min = now.getMinutes()
let sec = now.getSeconds()

p.textContent = `${year}/${moth}/${day} ${hour}:${min}:${sec}`
