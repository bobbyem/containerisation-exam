import './App.css'
import {useState} from "react"
import { TestButton } from './components/TestButton/TestButton'

function App() {
  const [testResponse, setTestResponse] = useState(null);

  const test = () => {
    console.log('test');

    fetch('http://localhost:3000').then((response) => response.json()).then(data => {
      setTestResponse(data);
    });
  }

  return (
    <>
      <TestButton action={test} />
      <h1>{testResponse}</h1>
    </>
  )
}

export default App
