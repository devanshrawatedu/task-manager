const taskForm = document.querySelector('form');
const taskInput = document.querySelector('input[type="text"]');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText != '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');;
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        deleteButton.addEventListener('click', function() {
            const confirmed = confirm('Are you sure you want to delete this task?');
            if (confirmed) {
                taskList.removeChild(li);
            }
        })

        taskInput.value = '';
    }
})