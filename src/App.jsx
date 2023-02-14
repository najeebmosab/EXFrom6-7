import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./Components/ClickPage"
function App() {
  let [num,setNumber] = useState(0);
  
  return (
    <div>
      <Button val={num}></Button>
      <button onClick={function(){setNumber(num+=1)}}>Click me {num} </button>
    </div>)

}

export default App
