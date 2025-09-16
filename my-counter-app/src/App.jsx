import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
      <h2>counter:{count}</h2>
      <button onClick={() => setCount(count+1)}>increment</button>
       <button onClick={() => setCount(count-1)}>decrement</button>
       <button onClick={() => setCount(0)}>reset</button>
      </div>)
}

export default App