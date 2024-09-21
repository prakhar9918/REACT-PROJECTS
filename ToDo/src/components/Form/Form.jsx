import React, { useState } from "react";
import { useTodo } from "../../contexts";

export default function  Form(){
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) =>{
     e.preventDefault()
     addTodo({todo,completed:false})
     setTodo("")
    }

    return(
        <>
        <form onSubmit={add}>
        <input
        type="text"
        value={todo}
        placeholder="Write here"
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
        </form>
        </>
    )
}