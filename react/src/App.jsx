// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// export default function App() {
//   return <Welcome name="Siti" />;
// }



// this not display any thing b/c no exported
// import { useState } from "react";

// // function Counter() {

// // so to display either
// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }


// // or 
// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }
// export default Counter;


// this alon not work 
// export const Welcome = () => {
//   return <h1>Hello, Siti!</h1>;
// };


// import { useState, useEffect } from "react";

// function Welcome({ name }) {
//   const [newName, setNewName] = useState(name);

//   useEffect(() => {
//     console.log("This runs AFTER the first render");
//     setTimeout(() => {
//       setNewName("Eliyas");
//     }, 2000);  // waits 2 seconds before updating
//   }, []); // empty [] means run once
//   return <h1>Hello, {newName}!</h1>;
// }

// export default function App() {
//   return <Welcome name="Siti" />;
// }


// import { useState, useEffect } from "react";

// export default function Demo() {
//   // 1️⃣ useState → holds the data that can change
//   const [name, setName] = useState("Siti");

//   // 2️⃣ useEffect → runs automatically AFTER first render
//   useEffect(() => {
//     console.log("🌼 useEffect: component has rendered on screen!");
//     console.log("Current name:", name);

//     // This runs once because [] is empty
//     setTimeout(() => {
//       console.log("🕐 Changing name automatically...");
//       setName("Eliyas");
//     }, 2000); // change name after 2 seconds
//   }, []);

//   // 3️⃣ Event handler → runs only when user clicks the button
//   function handleClick() {
//     console.log("👆 Button clicked!");
//     setName("Abdulaziz");
//   }

//   console.log("🔄 Rendering now... Name is:", name);

//   return (
//     <>
//       <h1>Hello, {name}!</h1>
//       <button onClick={handleClick}>Change to Abdulaziz</button>
//     </>
//   );
// }


// import React from "react"

// function Greeating() {
//   const name = "siti"
//   const age = "28"

//   return (
//     <>
//       <h1>Asselamu aleycum {name} </h1>
//       <p> You are 28 years old</p>
//     </>
//   )
     
// }
// export default Greeating;

// import { application } from "express"
import Counter from "./Counter";

export default function application() {
  return (
    < Counter />
  )
}