"use strict";
let todoList = [];
let idCounter = 0;
function addTask(task) {
    idCounter++;
    const newItem = {
        id: idCounter,
        task: task,
        completed: false
    };
    todoList.push(newItem);
    displayTasks();
}
function removeTask(id) {
    todoList = todoList.filter(item => item.id !== id);
    displayTasks();
}
function editTask(id, newTask) {
    const taskToEdit = todoList.find(item => item.id === id);
    if (taskToEdit) {
        taskToEdit.task = newTask;
        displayTasks();
    }
    else {
        console.log("Task not found");
    }
}
function displayTasks() {
    console.clear();
    todoList.forEach(item => {
        console.log(`${item.id}: ${item.task} [${item.completed ? "✔️" : "❌"}]`);
    });
}
// Example usage
addTask("Learn TypeScript");
addTask("Build a Todo List App");
editTask(1, "Master TypeScript");
removeTask(2);
