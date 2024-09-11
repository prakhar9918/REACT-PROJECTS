import { useState } from 'react'

function App() {
  // var num = prompt('Initilise your count');
  const [count, setCount] = useState(4);

  const addvalue = () => {
    if(count < 20 ){
    setCount(count + 1);
    }

  } 

  const removevalue = () => {
   if(count > 0){
    setCount(count - 1);
   }

  }

  return (
    <>
       <h3>Chai-aur-React</h3>
       <p>Count : {count}</p>
       <button onClick={addvalue} > Add Value</button>
       <button onClick={removevalue}> Remove Value</button>
    </>
  )
}

export default App;
