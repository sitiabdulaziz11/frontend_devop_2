//  Challenge
// Here’s a .then() version of fetching users:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));

// ✅ Your task:
// Rewrite it using async/await syntax — it should:


// Use an async function


// Await both the fetch() and response.json()


// Log the data to the console


// Handle errors with try...catch


async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error("Error", error);
    }
}
getData();
