for(let a = 1; a <= 5; a += 1){
    const div = document.getElementById("container")
    const box = document.createElement("div")
    console.log(box)
    box.style.color = "blue"
    box.style.width = "200px"
    box.style.height = "200px"
    box.textContent = "헷갈리지만 신기하고 재미있다!"
    div.append(box)
}