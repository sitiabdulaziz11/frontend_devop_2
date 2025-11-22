
import { useState } from "react";
import { useEffect } from "react";

export default function TodoApp() {
    const [text, setText] = useState("");  // text starts empty
    const [todos, setTodos] = useState([]);  // todos is an empty array
    const [ediId, setEditId] = useState(null);
    const [editText, setEditText] = useState("")

    function AddTodoList() {
        // setTodos([text, ...todos]);  // add new todo to array
        if (text.trim() === "") {
            return; // do nothing
        }
        // setTodos([{id: Date.now(), text }, ...todos]);  // add new todo to array
        setTodos([{id: Date.now(), text, completed: false }, ...todos ]);  // To add completed toggle
        setText("");  // clear input
        // console.log("todos", todos); // here prints old value
            // because React does not instantly update state.
            //  runs before React updates state
    }
    console.log("todos", todos);

    useEffect(() => {
        console.log("Updated todos:", todos);  // here updated value Because 
        // useEffect runs after React finishes updating state and re-rendering.
    }, [todos]);

    // function handleChange(e) {
    //     setText(e.target.value);
    // }

    function deleteTodo(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function startEdit(todo) {
        setEditId(todo.id);
        setEditText(todo.text);  // loads the OLD text into the input box
    }
    
    // function editTodo(id) {
    function saveEdit(id) {
        // const newText = prompt("edit todo");

        // setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo))
        setTodos(todos.map(todo => todo.id === id ? {...todo, text: editText} : todo));
        setEditId(null);
    }

    function toggleCompleted(id) {
        // setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo,
        // console.log("todo", todo)
        // ))

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                console.log("todo before:", todo);
                return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
            );
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
                    // todos.map((todo, index) => (
                    todos.map((todo) => (
                        // <li key={index}>
                        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through": "none" }}>
                            {/* {todo} */}
                            {todo.text}
                            {ediId === todo.id ? (
                                <>
                                  <input value={editText}
                                  onChange={(e) => setEditText(e.target.  value)} />
                                  <button onClick={() => saveEdit(todo.id)} >Save</button>
                                </>
                            ) : (
                                <>
                                  <button onClick={() => deleteTodo(todo.id)}>delete</button>
                                  <button onClick={() => startEdit(todo)}>edit</button>
                                  {/* <button onClick={() => toggleCompleted(todo.id)}> {todo.completed ? "Undo" : completed} </button> */}

                                  {/* <button onClick={() => toggleCompleted(todo.id)}> Completed </button> */}

                                  <button onClick={() => toggleCompleted(todo.id)}> {todo.completed ? " Completed" :"Not completed "} </button>

                                </>
                            )}
                        </li>
                        ))                              
                }
                 
            </ul>
        </>
    )
        
}