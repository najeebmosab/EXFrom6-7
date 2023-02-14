import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./Components/ClickPage"
import Box from "./Components/boxComponent"
function App() {

  let [num, setNumber] = useState(0);
  const [flag, setFlage] = useState(true);

  let [n, setN] = useState(0);

  const Handler = () => {
    debugger;
    console.log(flag);
    setFlage(!flag);
    console.log(flag);
  }

  return (
    <div>
      <Button val={num}></Button>
      <button onClick={function () { setNumber(num += 1) }}>Click me {num} </button>
      <div>
        <button onClick={Handler}>Show</button>
        <Box myFlag={flag} />
        <button onClick={Handler}>Show</button>
        <Box myFlag={!flag}></Box>
      </div>
      <div>
        <button onClick={function(){if(n>=10)return n = 10 ;setN(n += 1); }}>increment</button>
        <label htmlFor="" className={n>0?'greenText': n<0 ? 'redText': n==0 ? 'blackText':''}>{n}</label>
        <button onClick={function(){if(n <= -10)return n = -10;setN(n-=1)}}>decrement</button>
      </div>
    </div>)

}

export default App
