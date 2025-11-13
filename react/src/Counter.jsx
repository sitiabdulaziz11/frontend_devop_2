import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    function increase() {
        setCounter(counter + 1);
    }

    function decrease() {
        setCounter(counter - 1);
    }

    function reset() {
        setCounter(0);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
           <h1> 🧮 Counter App</h1>
           <h3> {counter} </h3>
           <button onClick={increase}> +Increase</button>
           <button onClick={decrease}> -Decrease </button>
           <button onClick={reset}> Reset</button>
        </div>
    )
}
