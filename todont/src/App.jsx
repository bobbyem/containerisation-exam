import './App.css'
import {useState} from "react"
import { TestButton } from './components/TestButton/TestButton'
import { TodontForm } from './components/TodontForm';

function App() {
  const [testResponse, setTestResponse] = useState(null);

  return (
    <>
      <TodontForm/>
      <h1>{testResponse}</h1>
    </>
  )
}

export default App
