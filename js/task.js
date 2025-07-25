function addTask(){
    const taskinput = document.getElementById('Taskinput');
    const taskText = taskinput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    // creating a li tag in the ul tag
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    // creating a span tag in the li tag 
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // creating a button of complete
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✔'; 
    completeButton.onclick = () => {
    taskSpan.classList.toggle('completed');
    };

     // creating a button of remove
     const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    // 
    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
}
 