// 호이스팅 가능 : 함수 만드는 부분이 호출하는 부분보다 아래에 있어도 된다
// sayYes()

// 호이스팅 불가
// sayNo() 

    createParagraph()
    createParagraph()
    createParagraph()
    createParagraph()
    createParagraph()
    

    function createParagraph(){
        const p = document.createElement("p")
        p.textContent = "새롭게 만들어진 문답 태그!"
        document.querySelector("#container").append(p)
    }



// 함수 이름짓기 규칙은 변수와 같다.
// 기능을 정의하는 만큼 동사를 사용하는 것이 좋다!
function sayYes(){
    console.log(1)
    console.log(2)
    alert("Yes!")    
}

 const sayNo = function(){
    alert("NO!")
    console.log(3)
 }

