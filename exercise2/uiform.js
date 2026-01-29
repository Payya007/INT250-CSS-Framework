let tasks = [];

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


function renderTasks(tasksArray, taskListElement) {
    taskListElement.innerHTML = "";

    tasksArray.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded"; // โจทย์ข้อ 44

        taskItem.innerHTML = `
            <div class="d-flex align-items-center">
                <input type="checkbox" class="form-check-input me-3 check-btn" 
                    data-id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
                <div>
                    <span class="badge bg-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'secondary'} me-2">
                        ${task.priority}
                    </span>
                    <span class="${task.isCompleted ? 'text-decoration-line-through text-muted' : ''}">
                        ${task.title}
                    </span>
                </div>
            </div>
            <div>
                <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${task.id}">Delete</button>
            </div>
        `;
        taskListElement.appendChild(taskItem);
    });
}
export { renderTasks };