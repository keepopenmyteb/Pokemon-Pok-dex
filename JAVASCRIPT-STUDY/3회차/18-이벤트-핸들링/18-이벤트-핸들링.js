const spanBtn = document.getElementById("span")
const strongBtn =  document.getElementById("strong")
const markBtn = document.getElementById("mark")

const handleCilck = function(event){

    if(event.target.id == "span"){
        const span = document.createElement("span")
        span.textContent = "span 태그"
        document.body.append(span)
    }else if(event.target.id == "strong"){
        const strong = document.createElement("strong")
        strong.textContent = "strong 태그"
        document.body.append(strong)
    }else if(event.target.id == "mark"){
        const mark = document.createElement("mark")
        mark.textContent = "mark 태그"
        document.body.append(mark)
    }
}

spanBtn.addEventListener("click", handleCilck)
strongBtn.addEventListener("click", handleCilck)
markBtn.addEventListener("click",  handleCilck)