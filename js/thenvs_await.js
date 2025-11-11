// The Difference: await fetch() vs fetch().then()

// Both do the same thing — they just use different styles.

// Let’s compare 👇

// ✅ Version 1 — Using await (modern and cleaner)
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
getData();


// 🧠 Explanation:

// await pauses until each Promise finishes

// Looks like synchronous code

// Easier to read and debug

// ✅ Version 2 — Using .then() (older style)

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


// 🧠 Explanation:

// .then() runs after the Promise finishes

// Each .then() returns another Promise

// .catch() handles errors

// ⚖️ Side-by-Side Comparison
// Feature	await fetch()	fetch().then()
// Style	Modern, clean	Older, callback-based
// Requires async?	✅ Yes	❌ No
// Reads like normal code	✅ Yes	🚫 No
// Error handling	try...catch	.catch()
// Same result?	✅ Yes	✅ Yes
// 🧩 Example Output for Both:
// [
//   { id: 1, name: "Leanne Graham", ... },
//   { id: 2, name: "Ervin Howell", ... },
//   ...
// ]

// 💬 Summary:

// Both work the same — .then() and await are just two ways to use Promises

// await looks simpler and cleaner for modern JavaScript (Next.js, React, etc.)

// .then() is older style (still useful when chaining multiple async actions)


// Practice: Write a function that fetches and displays JSON data from an API using fetch().
async function fetchData() {
    const response = await fetch("url");
    const data = await response.json();
    console.log(data);
}
fetchData();

const fetchData = async () => {
    const response = await fetch("url");
    const data = await response.json();
    console.log(data)
}
fetchData();

// need correction
// function fetchData() {
//     const response = fetch("url") 
//     const data = .then(response.json)
//     .then(console.log(data))
// }

// correction

fetch("url")
.then(response = response.json())
.then(data => console.log(data))
.catch(error => console.log("Error:", error));

// for try
async function api_fetch() {
    try {
        const respo = await fetch("url");
        const data = await respo.json();
        closed.log(data)
    } catch {
        console.error("err", error);
        
    }
    }
    
    api_fetch()

// async/await → modern, cleaner.
// .then/.catch → older, still valid.