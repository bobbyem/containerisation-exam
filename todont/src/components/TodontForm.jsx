import {useState} from 'react'

export const TodontForm = () => {
    const [text, setText] = useState();

    const addTodont = (todont) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todont),
        }

        fetch('http://localhost:3000',options)
            .then((resonse) => resonse.json())
            .then((data) => { console.log(data) });
    }
    
  return (
      <div>
          <form action="" onSubmit={(e) => {
              e.preventDefault();
              addTodont({text });
              setText('');
   
          }}>
              <input type="text" name="text-input" id="text-input" onInput={(e) => { setText(e.target.value) }} />
              <button type="submit">Submit</button>
          </form>
    </div>
  )
}
