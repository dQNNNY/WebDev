const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const totalCount = document.getElementById('total-count');
const completedCount = document.getElementById('completed-count');

function updateStats() {
    const allItems = todoList.querySelectorAll('li').length;
    const completedItems = todoList.querySelectorAll('input[type="checkbox"]:checked').length;
    
    totalCount.textContent = allItems;
    completedCount.textContent = completedItems;
}

function addTask() {
    const text = input.value.trim();
    
    if (text === "") return;

    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';

    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed');
        updateStats();
    });

    delBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        updateStats();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    
    todoList.appendChild(li);

    input.value = "";
    updateStats();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});