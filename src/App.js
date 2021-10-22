import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  const [input,setInput] = useState();
  const [result,setResult] = useState(0);

  const handler = e => {
      setInput(e.target.value);
  }

  return (
    <div className="App">
      <center>
        <input type="text" value={input} name="input" onChange={handler}/>
        <br/>
        <button onClick={() => setResult(eval(input))}>Result</button>
        <h4>Result is {result}</h4>
      </center>
    </div>
  );
}

export default App;
