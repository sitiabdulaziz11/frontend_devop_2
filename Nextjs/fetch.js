function getUsers() {
   return  fetch("https://jsonplaceholder.typicode.com/users");
}

const getUsers = () => fetch("https://jsonplaceholder.typicode.com/users")  // fetch() returns a Promise, not the real data yet — so you must use .then() or await to get it.

// 💡 But let’s understand what happens

// Both of these functions return a Promise, not the actual data yet.

// That means if you do this:

// const result = getUsers();
// console.log(result);


// 👉 You’ll see something like:

// Promise { <pending> }


// because the network request hasn’t finished yet.

// How to get the real data

// You need to handle the Promise — either with .then() or async/await.

// Option 1 — Using .then()
// getUsers()
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// Option 2 — Using async/await (cleaner)
// async function showUsers() {
//   const response = await getUsers();
//   const data = await response.json();
//   console.log(data);
// }

// showUsers();

// 🧩 Quiz

// 👉 Task:
// Write a function named getUsers() that:

// Uses the fetch() function to get data from
// https://jsonplaceholder.typicode.com/users

// Converts the response to JSON

// Logs (prints) the data to the console

// ✅ Answer (using async/await)

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getUsers();



async function getUserNames() {
  try {
    // 1️⃣ Fetch data from the API (returns a Promise)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 2️⃣ Convert the response to JSON (another Promise)
    const data = await response.json();

    // 3️⃣ Loop through the data and print each user's name
    data.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    // 4️⃣ Handle any errors (like internet problems)
    console.error("Error fetching users:", error);
  }
}

// 5️⃣ Call the function
getUserNames();
