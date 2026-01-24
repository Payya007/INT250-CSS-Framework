let task = [];


const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const title = taskInput.value.trim();
    const priority = priorityInput.value;

    if (title === "") {
        alert("Please enter a task!");
        return;
    }


    const newTask = {
        id: Date.now(),
        title: title,
        priority: priority,
        isCompleted: false
    };

    task.push(newTask);
    taskInput.value = "";
    renderTasks();
    console.log("Current Tasks:", task);
}