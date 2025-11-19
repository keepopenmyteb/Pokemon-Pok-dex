const vos = ["박지한", "최원준", "김강록"]

/* console.log(vos)

vos[0] = "지원"
vos[1] = "원준"
vos[2] = "강록"
console.log(vos) */

for(let i = 0; i < 3; i +=1){
    console.log(vos[i])
}

// push : 배열에 주어진 요소 추가하기
vos.push("강윤호")
console.log(vos)

// push : 배열의 끝부분부터 요소 제거하기
vos.pop()
console.log(vos)

// indexOf : 주어진 요소의 유무를 인덱스 번호로 확인
console.log(vos.indexOf("최원준"))
console.log(vos.indexOf("강윤호"))

// splice : 정해진 위치로부터 정해진 개수만큼 요소 제거
// vos.splice(0, 2)
// console.log(vos)

// splice로 요소를 지운 다음, 대체 값을 채우는 것도 가능하다!
// vos.splice(0, 3, "박지현", "최원준", "김강록")
// console.log(vos)

// forEach : 배열의 개별 요소에 대한 함수를 차례대로 호출
vos.forEach(function(item){
    console.log("포이치에서 호출된 함수!" + item)
})