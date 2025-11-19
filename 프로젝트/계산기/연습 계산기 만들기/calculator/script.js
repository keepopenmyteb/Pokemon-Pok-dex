const display = document.querySelector(".display"); // display 요소 선택 (계산기 화면)
const buttons = document.querySelectorAll(".button"); // 모든 버튼 요소 선택



// 계산에 필요한 변수들 초기화
let firstOperand = null;        // 첫 번째 피연산자 저장
let operator = null;            // 선택된 연산자 저장
let shouldResetDisplay = false; // 연산자 클릭 후 다음 숫자 입력 시 디스플레이 초기화 여부


buttons.forEach(button => { // 모든 버튼에 클릭 이벤트 추가
    button.addEventListener("click", () => {
        const value = button.textContent; // 버튼의 텍스트 값 (예: "1", "+", "=" 등)


        if (button.classList.contains("number")) {  // 숫자 버튼 클릭 시
            if (display.textContent === "0" || shouldResetDisplay) {   // 현재 디스플레이가 "0"이거나, 연산자 클릭 후 새로 입력하는 경우
                display.textContent = value;   // 디스플레이를 새로운 숫자로 교체
                shouldResetDisplay = false;    // 초기화 상태 해제
            } else {
                display.textContent += value;  // 기존 숫자 뒤에 이어붙이기
            }
        }


        else if (value === ".") {   // 소수점(.) 버튼 클릭 시
            if (shouldResetDisplay) {     // 연산자 클릭 직후라면 "0."으로 시작
                display.textContent = "0."; //연산자 직후 소수점 누르면 화면을 "0."으로 초기화
                shouldResetDisplay = false; //디스플레이 초기화 상태 해제
            } 
            else if (!display.textContent.includes(".")) {    // 디스플레이에 이미 "."이 없는 경우만 추가
                display.textContent += "."; //기존 숫자 뒤에 소수점 추가, 이미 있으면 무시
            }
        }


        else if (value === "C") {  // C (Clear) 버튼 클릭 시 - 전체 초기화
            display.textContent = "0"; // 디스플레이를 0으로 리셋
            firstOperand = null;        // 첫 번째 피연산자 초기화
            operator = null;            // 연산자 초기화
            shouldResetDisplay = false; // 초기화 상태 해제
        }


        else if (value === "±") {  // ± (부호 변경) 버튼 클릭 시
            display.textContent = String(-parseFloat(display.textContent)); // 현재 숫자에 -를 곱함
        }


        else if (value === "%") {       // % (퍼센트) 버튼 클릭 시
            display.textContent = String(parseFloat(display.textContent) / 100); // 현재 숫자를 100으로 나눔
        }


        else if (button.classList.contains("operator") && value !== "=") { //  연산자 버튼 클릭 시 (+, -, *, /)
            if (firstOperand === null) { // 첫 번째 피연산자가 비어있다면, 현재 디스플레이 값을 저장
                firstOperand = parseFloat(display.textContent); //첫 번째 숫자를 화면에서 읽어와 저장
            } 
            else if (operator && !shouldResetDisplay) {   // 이미 첫 번째 피연산자와 연산자가 있으면, 즉시 계산 수행
                const result = calculate(firstOperand, parseFloat(display.textContent), operator); //이미 저장된 숫자와 화면 숫자를 이용해 계산 수행
                display.textContent = result;  // 계산 결과를 표시
                firstOperand = result;          // 결과를 다음 계산의 첫 번째 피연산자로 저장
            }
            operator = value; // 현재 클릭한 연산자를 저장
            shouldResetDisplay = true; // 다음 숫자 입력 시 디스플레이 초기화
            console.log("firstOperand:", firstOperand, "operator:", operator); // 변수 값 확인용
        }


        else if (value === "=") {  // = (등호) 버튼 클릭 시 - 실제 계산 수행
            if (operator && firstOperand !== null) { // 연산자와 첫 번째 피연산자가 모두 있는 경우에만 계산
                const secondOperand = parseFloat(display.textContent); // 두 번째 피연산자 저장
                const result = calculate(firstOperand, secondOperand, operator); // 계산 함수 호출
                display.textContent = result;  // 결과 표시
                firstOperand = null;           // 계산 종료 후 초기화
                operator = null;                // 변수 operator가 null로 초기화됨
                shouldResetDisplay = true;     // 결과 표시 후 다음 숫자 입력 시 디스플레이 초기화
            }
        }
    });
});


function calculate(a, b, op) { // 실제 계산을 수행하는 함수
    switch (op) {
        case "+": return a + b; // 덧셈
        case "-": return a - b; // 뺄셈
        case "*": return a * b; // 곱셈
        case "/": return b !== 0 ? a / b : "Error"; // 0으로 나누면 오류 표시
        default: return b; // 연산자가 없는 경우 두 번째 피연산자 반환
    }
}
