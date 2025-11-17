
import { useState } from "react";

export default function TodoApp() {
    const [text, setText] = useState("");  // text starts empty
    const [todos, setTodos] = useState([]);  // todos is an empty array

    function AddTodoList() {
        setTodos([...todos, text]);  // add new todo to array
        setText("");  // clear input
    }

    // function handleChange(e) {
    //     setText(e.target.value);
    // }

    function deleteTodo(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <>
            <input value={text}
            onChange={(e) => setText(e.target.value)}
            // onChange={handleChange}
             />
            
            <button onClick={AddTodoList}>Add Todo</button>

            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button>edit</button>
                        </li>
                        ))                              
                }
                 
            </ul>
        </>
    )
        
}