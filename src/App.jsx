import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./Components/ClickPage"
import Box from "./Components/boxComponent"
import ColorButton from "./ComponentsEX7/EX7.1/ColorButtonBlue"
function App(props) {

  let [num, setNumber] = useState(0);
  const [flag, setFlage] = useState(true);

  let [n, setN] = useState(0);

  const Handler = () => {
    debugger;
    console.log(flag);
    setFlage(!flag);
    console.log(flag);
  }

  const [selectedColor, setSelectedColor] = useState('');

  function handleButtonClick(color) {
    setSelectedColor(color);
  }
  const colors = ['blue', 'red', 'yellow'];
  const [checkboxes, setCheckboxes] = useState([false, false, true, true]);

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
        <button onClick={function () { if (n >= 10) return n = 10; setN(n += 1); }}>increment</button>
        <label htmlFor="" className={n > 0 ? 'greenText' : n < 0 ? 'redText' : n == 0 ? 'blackText' : ''}>{n}</label>
        <button onClick={function () { if (n <= -10) return n = -10; setN(n -= 1) }}>decrement</button>
      </div>
      <div>
        {/* EX7.1 */}
        {colors.map(color => (
          <ColorButton key={color} color={color} onClick={handleButtonClick} />
        ))}
        <p>You selected: {selectedColor}</p>
      </div>
      <div>
        <form action="">
          <div>
            <input onClick={function () {setCheckboxes(!checkboxes[0])}} type="checkbox" checked={checkboxes[0]} />
            <label htmlFor="">I read</label>
          </div>
          <div>
            <input onClick={function () {setCheckboxes(!checkboxes[1])}} type="checkbox" checked={checkboxes[1]} />
            <label htmlFor="">I accept</label>
          </div>
          <div>
            <input type="checkbox" onClick={function () {setCheckboxes(!checkboxes[2])}} checked={checkboxes[2]} />
          <label htmlFor="">I want to get the weekly</label>
          </div>
          <div>
            <input type="checkbox" onClick={function () {setCheckboxes(!checkboxes[3])}} checked={checkboxes[3]} />
            <label htmlFor="">I want to get sales</label>
          </div>

        </form>
      </div>
    </div>)

}

export default App
