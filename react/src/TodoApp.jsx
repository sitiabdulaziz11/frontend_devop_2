
import { useState } from "react";
import { useEffect } from "react";

export default function TodoApp() {
    const [text, setText] = useState("");  // text starts empty
    // const [todos, setTodos] = useState([]);  / todos is an empty array
    const [ediId, setEditId] = useState(null);
    const [editText, setEditText] = useState("")


    const [todos, setTodos] = useState(() => {
    // const locStorage = (todos) => {
        try {
            const saved = localStorage.getItem("todos");  // to read from local storage on
            // the first rendering
            return saved ? JSON.parse(saved) : [];  //Read the string If exists → convert string → array then Return array.
        } catch (error) {
            console.error("Error parsing todos:", error);
            return [];
        }
    });
    

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
    // console.log("todos", todos);

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
        setEditId(null);  // close editing mode
    }

    // function toggleCompleted(id) {
    //     // setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo,
    //     // console.log("todo", todo)
    //     // ))

    //     setTodos(
    //         todos.map(todo => {
    //             if (todo.id === id) {
    //             console.log("todo before:", todo);
    //             return { ...todo, completed: !todo.completed };
    //             }
    //             return todo;
    //         })
    //         );
    // }

    function toggleCompleted(id) {
    const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    const updatedTodo = updatedTodos.find(todo => todo.id === id); //to see only the updated item
    console.log("updated tog todo:", updatedTodo);  // updated item only 
    console.log("updated togs todo:", updatedTodos);   // all current items

    setTodos(updatedTodos);
    }

    // useEffect(() => { // this not work for reading, b/c the intial empty useState([]) overwrite the saved todos. so for load/read local storage , we use lazitialzer ueState function above.
    //     const storedTodos = localStorage.getItem('todos');
    //     if (storedTodos) setTodos(JSON.parse(storedTodos));  // to read from local storage on the second  rendering
    //     // mean but this make double rendering, b/c on  first react render, after it finish useeffect again run/render to load/read loacl todos.
    //     }, []);


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)); // Convert array → to string to save inside local storage.
        }, [todos]);


   

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
