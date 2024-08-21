interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
}

let todoList: TodoItem[] = [];
let idCounter: number = 0;

function addTask(task: string): void {
    idCounter++;
    const newItem: TodoItem = {
        id: idCounter,
        task: task,
        completed: false
    };
    todoList.push(newItem);
    displayTasks();
}

function removeTask(id: number): void {
    todoList = todoList.filter(item => item.id !== id);
    displayTasks();
}

function editTask(id: number, newTask: string): void {
    const taskToEdit = todoList.find(item => item.id === id);
    if (taskToEdit) {
        taskToEdit.task = newTask;
        displayTasks();
    } else {
        console.log("Task not found");
    }
}

function displayTasks(): void {
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
