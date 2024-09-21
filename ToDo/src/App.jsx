import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import Todoitems from './components/Todoitems/Todoitems'
import Form from './components/Form/Form'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
   setTodos((prev) => [{id:Date.now() , ...todo},...prev])
  }

  const updateTodo = (id,todo) => {
   setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, todo:todo} : prevTodo )))
  }

  const deleteTodo = (id) => {
   setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
   
  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo )))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
      <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
       <h1>Todo App</h1>
       <div>
          <Form/>
       </div>
       <div>
       {todos.map((todo) => (<div key={todo.id} className='w-full'>
                            <Todoitems todo={todo} />
                          </div>
                      ))}
       </div>
      </TodoProvider>
    </>
  )
}

export default App
