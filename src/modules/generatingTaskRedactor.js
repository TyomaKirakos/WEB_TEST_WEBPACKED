const generatingTaskRedactor = () => {
    const taskRedactorPage = document.querySelector('.task-redactor-page');
    let tasks = JSON.parse(localStorage.tasks);
    
    tasks.forEach((task, index) => {
        // console.log(index);
        let taskBlock = document.createElement('div');
        taskBlock.classList.add("test-page__task-block", "task-block", "task-order_" + index);
        taskBlock.id = task.id;
        taskBlock.innerHTML = `<button class="task-block__delete-task-btn btn">+</button>
        <p class="task-block__task-info blue-bold-text">ID: ${task.id}</p>
        <xmp class="task-block__task-text blue-bold-text">${task.question}</xmp>`;

        let taskOptionsBlock = document.createElement('div');
        taskOptionsBlock.classList.add('task-block__task-options', 'task-options');
        taskOptionsBlock.id = 'task-options_' + task.id;

        if (task.rightAnswers.length == 1){
            taskOptionsBlock.innerHTML = `<label for="task${task.id}_0" class="task-options__task-option"><input disabled type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input disabled type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input disabled type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input disabled type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>`;
        } else {
            taskOptionsBlock.innerHTML = `<label for="task${task.id}_0" class="task-options__task-option"><input disabled type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input disabled type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input disabled type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input disabled type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>`;
        }

        taskBlock.append(taskOptionsBlock);
        taskRedactorPage.append(taskBlock);
    });
}

export default generatingTaskRedactor;