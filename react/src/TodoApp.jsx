
import { useState } from "react";

export default function TodoApp() {
    const [text, setText] = useState("");  // text starts empty
    const [todos, setTodos] = useState([]);  // todos is an empty array
    // const [del, setDel] = useState();

    function AddTodoList() {
        setTodos([...todos, text]);  // add new todo to array
        setText("");  // clear input
    }

    // function handleChange(e) {
    //     setText(e.target.value);
    // }

    function DeleteTodo(id){
        const toDel = setDel(filter(id))
        delete(toDel);
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
                        <li key={index}>{todo}   <button>delete</button> <button>edit</button></li>
                    ))
                }
            </ul>
        </>
    )
        
}