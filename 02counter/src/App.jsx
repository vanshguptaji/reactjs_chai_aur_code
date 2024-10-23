import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //const
  let [counter, setCounter] = useState(15)

  // let Counter = 15

  const addValue = () => {
    // console.log("value added", Math.random());  
    // Counter += 1;
    if (counter < 30){
    counter += 1;
    setCounter(counter)
    console.log(counter);
    }else{
      setCounter(counter)
    }
    
  }

  const decValue = () => {
    if(counter > 0){
    counter -= 1;
    setCounter(counter)
    console.log(counter);
    }
    
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value</button>
    <br/>
    <button
    onClick={decValue}
    >decrease value</button>
    </>
  )
}

export default App
