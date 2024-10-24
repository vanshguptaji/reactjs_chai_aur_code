import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [
    {
      username: "vansh gupta",
      profession: "engg."
    },
    {
      username: "aryan chatela",
      profession: "doctor"
    }
  ];

  let cardElements = [];
  myArr.forEach((person, index) => {
    cardElements.push(
      <Card key={index} username={person.username} profession={person.profession}/>
    );
  });

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="chai aur code" profession ="Teacher"/>
    <Card username="vansh gupta"/>
    {cardElements}
    </>
  )
}

export default App
