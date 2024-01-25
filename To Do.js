

// Get elements from the DOM
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    const priority = document.getElementById('prioritySelect').value;
    const dueDate = document.getElementById('dueDateInput').value;
    const category = document.getElementById('categoryInput').value;
    const description = document.getElementById('descriptionInput').value;

    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <p><strong>Task:</strong> ${todoText}</p>
                <p><strong>Priority:</strong> ${priority}</p>
                <p><strong>Due Date:</strong> ${dueDate}</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Description:</strong> ${description}</p>
            </div>
            <div class="task-buttons">
                <button onclick="editTodo(this)">Edit</button>
                <button onclick="removeTodo(this)">Remove</button>
            </div>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        window.alert("Please enter your task.");
    }
}

// Function to remove a todo
function removeTodo(element) {
    const li = element.parentElement.parentElement;
    todoList.removeChild(li);
}

// Function to edit a todo
function editTodo(element, event) {
    const li = element.parentElement.parentElement;
    const taskDetails = li.querySelector('.task-details');
    const taskButtons = li.querySelector('.task-buttons');

    taskDetails.innerHTML = `
        <input type="text" id="editedTaskText" value="${taskDetails.querySelector('p:first-child').textContent.split(':')[1].trim()}">
        <select id="editedPriority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <input type="date" id="editedDueDate" value="${taskDetails.querySelector('p:nth-child(3)').textContent.split(':')[1].trim()}">
        <input type="text" id="editedCategory" value="${taskDetails.querySelector('p:nth-child(4)').textContent.split(':')[1].trim()}">
        <textarea id="editedDescription">${taskDetails.querySelector('p:nth-child(5)').textContent.split(':')[1].trim()}</textarea>
    `;
    taskButtons.innerHTML = `
        <button onclick="saveEditedTodo()">Save</button>
        <button onclick="cancelEdit()">Cancel</button>
    `;
}

// Function to save edited todo
function saveEditedTodo() {
    const li = event.target.parentElement.parentElement;
    const taskDetails = li.querySelector('.task-details');
    const taskButtons = li.querySelector('.task-buttons');

    const editedTaskText = document.getElementById('editedTaskText').value;
    const editedPriority = document.getElementById('editedPriority').value;
    const editedDueDate = document.getElementById('editedDueDate').value;
    const editedCategory = document.getElementById('editedCategory').value;
    const editedDescription = document.getElementById('editedDescription').value;

    taskDetails.innerHTML = `
        <p><strong>Task:</strong> ${editedTaskText}</p>
        <p><strong>Priority:</strong> ${editedPriority}</p>
        <p><strong>Due Date:</strong> ${editedDueDate}</p>
        <p><strong>Category:</strong> ${editedCategory}</p>
        <p><strong>Description:</strong> ${editedDescription}</p>
    `;
    taskButtons.innerHTML = `
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="removeTodo(this)">Remove</button>
    `;
}

// Function to cancel editing todo
function cancelEdit(event) {
    const li = event.target.parentElement.parentElement;
    const taskDetails = li.querySelector('.task-details');
    const taskButtons = li.querySelector('.task-buttons');

    const originalTaskText = taskDetails.querySelector('p:first-child').textContent.split(':')[1].trim();
    const originalPriority = taskDetails.querySelector('p:nth-child(2)').textContent.split(':')[1].trim();
    const originalDueDate = taskDetails.querySelector('p:nth-child(3)').textContent.split(':')[1].trim();
    const originalCategory = taskDetails.querySelector('p:nth-child(4)').textContent.split(':')[1].trim();
    const originalDescription = taskDetails.querySelector('p:nth-child(5)').textContent.split(':')[1].trim();

    taskDetails.innerHTML = `
        <p><strong>Task:</strong> ${originalTaskText}</p>
        <p><strong>Priority:</strong> ${originalPriority}</p>
        <p><strong>Due Date:</strong> ${originalDueDate}</p>
        <p><strong>Category:</strong> ${originalCategory}</p>
        <p><strong>Description:</strong> ${originalDescription}</p>
    `;
    taskButtons.innerHTML = `
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="removeTodo(this)">Remove</button>
    `;
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
