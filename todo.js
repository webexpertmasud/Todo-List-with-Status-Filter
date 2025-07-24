// ✅ Step 1: Create an array of todos
const todos = [
  { title: "Do homework", done: true },
  { title: "Buy groceries", done: false },
  { title: "Finish project", done: false },
  { title: "Call a friend", done: true },
  { title: "Clean the room", done: false },
  { title: "Read a book", done: true }
];

// ✅ Step 2: Filter completed and ongoing tasks
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// ✅ Step 3: Display Completed Tasks
console.log("✅ DONE TASKS:");
completedTasks.forEach(task => console.log("- " + task.title));

// ✅ Step 4: Display Ongoing Tasks
console.log("\n⏳ ONGOING TASKS:");
ongoingTasks.forEach(task => console.log("- " + task.title));
