const items = document.getElementById('todo');
const addBtn = document.getElementById('addbtn');
const editBtn = document.getElementById('editbtn');
const delBtn = document.getElementById('delbtn');
const taskAdd = document.getElementById('task');

// Add a new task
addBtn.addEventListener('click', function() {
    if (taskAdd.value !== '') {
        const list = document.createElement("li");
        list.innerText = taskAdd.value;
        list.classList.add('list');
        items.appendChild(list);
        taskAdd.value = ""; // Clear the text input
    }
});

// Edit the last task added
editBtn.addEventListener('click', function() {
    const lastTask = items.lastElementChild;
    if (lastTask && taskAdd.value !== '') {
        lastTask.innerText = taskAdd.value;
        taskAdd.value = ""; // Clear the text input
    }
});

// Delete the last task added
delBtn.addEventListener('click', function() {
    const lastTask = items.lastElementChild;
    if (lastTask) {
        items.removeChild(lastTask);
    }
});
