import "./APP.css";

const fruits = [
    {name: "딸기", color: "빨강", 크기: 2 },
    {name: "바나나", color: "노랑", 크기: 5 },
    {name: "키위", color: "초록", 크기: 3 },
    {name: "사과", color: "빨강", 크기: 4 },
    {name: "블루베리", color: "파랑", 크기: 1 },
    {name: "오렌지", color: "주황", 크기: 1 },
    {name: "포도", color: "보라", 크기: 2 },
    {name: "레몬", color: "노랑", 크기: 3 },
    {name: "체리", color: "빨강", 크기: 2 },
    {name: "수박", color: "초록", 크기: 8 },
];

function App() {
    return (
    <>
    {fruits.fillter((fruit) => fruit.color === "빨강")
    .map((fruit) => (
    <div key = {fruit.name}>
        {fruits[0].name} {fruits[0].color}, 크기:{" "} {fruits[0].크기}
    </div>
    ))};
    </>
    );
}

export default App;
