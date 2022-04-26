const deletingTasks = () => {
    const taskRedactorPage = document.querySelector('.task-redactor-page');
    let tasks = JSON.parse(localStorage.tasks);

    const isTasksOnPage = () => {
        let tasksOnPage = document.querySelectorAll('.task-block');
        if (tasksOnPage.length == 1){
            let text = document.createElement('p');
            text.classList.add('blue-bold-text', 'task-redactor-page__warning-text');
            text.textContent = 'Заданий нет :(';
            taskRedactorPage.append(text);
        }
    }

    isTasksOnPage();

    taskRedactorPage.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-block__delete-task-btn')){
            let taskBlock = e.target.parentNode;
            let deletedTask = tasks.find(task => task.id == taskBlock.id);
            let indexDeletedTask = tasks.indexOf(deletedTask);
            tasks.splice(indexDeletedTask, 1);
            taskBlock.remove();
            localStorage.tasks = JSON.stringify(tasks);
        }

        isTasksOnPage();
    })
}

export default deletingTasks;