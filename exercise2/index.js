
import { renderTasks } from "./uiform.js";


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompleted');
const searchInput = document.getElementById('searchInput');
const modeBtn = document.querySelector('.btn-group')
function addTask() {
    const title = taskInput.value.trim();
    if (title === "") return;

    const newTask = {
        id: Date.now(),
        title: title,
        priority: document.getElementById('priorityInput').value,
        isCompleted: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    render();
}

function render() {

    renderTasks(tasks, taskList);
    saveToStorage();
    document.getElementById('totalCount').innerText = tasks.length;
    document.getElementById('activeCount').innerText = tasks.filter(t => !t.isCompleted).length;
}
// ฟังก์ชันสำหรับลบงาน 
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    render();
}
function saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// ฟังก์ชันสำหรับเปลี่ยนสถานะการติ๊ก 
function checkStatus(id, isChecked) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.isCompleted = isChecked;
        render();
    }
}
taskList.addEventListener('click', (e) => {
    const id = Number(e.target.dataset.id);
    if (!id) return;
    // แยกแยะว่ากดอะไร 
    if (e.target.classList.contains('delete-btn')) {
        deleteTask(id); // ถ้ากดปุ่มลบ ให้เรียก deleteTask
    } else if (e.target.classList.contains('check-btn')) {
        checkStatus(id, e.target.checked); // ถ้ากดติ๊ก ให้เรียก checkStatus
    }
});
clearCompletedBtn.addEventListener('click', () => {
    console.log("Before clear:", tasks.length); // เช็คจำนวนก่อนลบ
    tasks = tasks.filter(t => !t.isCompleted);
    console.log("After clear:", tasks.length);  // เช็คจำนวนหลังลบ
    render();
});

searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    // กรองงานที่มีชื่อตรงกับคำที่ค้นหา
    const filtered = tasks.filter(t => t.title.toLowerCase().includes(term));
    // สั่งวาดหน้าจอเฉพาะงานที่ตรงเงื่อนไข
    renderTasks(filtered, taskList);
});
modeBtn.addEventListener('click', (e) => {
    const mode = e.target.dataset.filter; // ดูว่ากดปุ่มไหน (all, active, completed)
    if (!mode) return;

    // ถ้า กดปุ่มมาเป็น active ก็จะ แสดงผลออกมาแค่อันที่ ไม่ completed 
    // ถ้า กดปุ่มมาเป็น completed ก็จะ แสดงผลออกมาแค่อันที่ completed
    const filteredTasks = tasks.filter(t => {
        if (mode === 'active') return !t.isCompleted;    
        if (mode === 'completed') return t.isCompleted; 
        return true; // ถ้าเป็น 'all' ให้ผ่านหมด
    });
    renderTasks(filteredTasks, taskList);
    modeBtn.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active')); // เอา class active ทุ่มปุ่ม ออกทั้งหมด
    e.target.classList.add('active'); // แล้วค่อยเพิ่ม class active ให้ปุ่มที่กดเข้ามา
}); 
addBtn.addEventListener('click', addTask);
render();