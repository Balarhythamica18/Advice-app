import {useState} from 'react'
import './App.css'


const App = () => {
 

  const[advice,setAdvice]=useState("Time Heals Everything!!")
  const[count,setCount]=useState(1)
  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data= await res.json();
    setAdvice(data.slip.advice);
    setCount((e)=>e+1)
  }
  
  return (
    
    <div>
     
      <div className="main">
      <h2>{advice}</h2>
      <button onClick={getAdvice}> Get Advice </button>
      <p>
        You Have Read {count} Advice Today!!
      </p>
      </div>
    </div>
  )
}

export default App
