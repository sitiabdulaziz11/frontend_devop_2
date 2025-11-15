
import { useState } from "react";

export default function TodoApp() {
    const [text, setText] = useState();
    const [todos, setTodos] = useState();

    function AddTodoList() {
        setTodos(text);
        setText("");
    }

    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={AddTodoList}>Add Todo</button>

            <ul>
                {
                    todos.map((todo) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </>
    )
        
}