import { Component, useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0) 
  const [inputValue, setinputValue] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const setCounterNumber = () => {
    setCounter(inputValue)
  }

  return (<>
    <Count counter={counter}/>
    <PlusButton setCounter={setCounter} incrementCounter= {incrementCounter} />
    <MinusButton setCounter={setCounter} decrementCounter= {decrementCounter}/>
    <CounterInput inputValue={inputValue} setinputValue={setinputValue} setCounterNumber={setCounterNumber}/>
    </>
    )
}

function CounterInput({inputValue, setinputValue, setCounterNumber}) {
  return(
    <>
    <input type='number' value={inputValue} onChange={(event)=> setinputValue(event.target.value)}/>
    <button onClick={setCounterNumber}>입력</button>
    </>
  )
}

function PlusButton ({setCounter, incrementCounter}) {
  return <button onClick={incrementCounter}>+</button>
}

function MinusButton({setCounter, decrementCounter}) {
  return <button onClick={decrementCounter}>-</button>
}

function Count({ counter })  {
  return <div>counter : {counter}</div>
}

// class classApp extends Component {
//   state = { counter: 1 };

//   incrementCounter = () => {
//     this.setState({counter: this.state.counter + 1})
//   }

//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1})
//   }

//   render(){
//     return (
//       <>
//       <Count counter={ this.state.counter}/>
//       <PluseButton incrementCounter={this.incrementCounter}/>
//       <MinusButton decrementCounter={this.decrementCounter}/>
//       </>
//     )
//   }
// }

// class PluseButton extends Component {
//   render() {
//     return <button 
//       onClick={this.props.incrementCounter}>+</button>
//   }
// }
// class MinusButton extends Component {
//   render(){
//     return <button
//       onClick={this.props.decrementCounter}>-</button>
//   }
// }


// class Count extends Component {
//   render() {
//     return <div>counter: {this.props.counter}</div>
//   }
// }

    export default App;
// export default classApp;
