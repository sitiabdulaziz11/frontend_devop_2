
import { useState } from "react";

export default function TodoApp() {
    const [text, setText] = useState("");  // text starts empty
    const [todos, setTodos] = useState([]);  // todos is an empty array

    function AddTodoList() {
        // setTodos([text, ...todos]);  // add new todo to array

        if (text.trim() === "") {
            return; // do nothing
        }
        
        setTodos([{id: Date.now(), text }, ...todos]);  // add new todo to array
        setText("");  // clear input
    }
    // function handleChange(e) {
    //     setText(e.target.value);
    // }

    function deleteTodo(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    
    // function editTodo()

    return (
        <>
            <input value={text}
            onChange={(e) => setText(e.target.value)}
            // onChange={handleChange}
             />
            
            <button onClick={AddTodoList}>Add Todo</button>

            <ul>
                {
                    // todos.map((todo, index) => (
                    todos.map((todo) => (
                        // <li key={index}>
                        <li key={todo.id}>
                            {/* {todo} */}
                            {todo.text}
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button>edit</button>
                        </li>
                        ))                              
                }
                 
            </ul>
        </>
    )
        
}