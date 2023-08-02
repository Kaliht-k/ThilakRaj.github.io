const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(deleteButton);
        
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done-button';
        doneButton.addEventListener('click', toggleDone);
        li.appendChild(doneButton);
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}

function toggleDone(event) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle('done');
}