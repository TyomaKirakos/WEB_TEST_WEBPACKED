const addingTasks = () => {
    const addTaskForm = document.querySelector('.add-task-form');
    const questionInput = addTaskForm.querySelector('.task-block__task-text');
    const allOptionCheckboxes = addTaskForm.querySelectorAll('.task-option__checkbox');
    const errorText = addTaskForm.querySelector('.add-task-form__error-text');
    
    const addTaskBtn = addTaskForm.querySelector('.add-task-form__add-btn');
    
    function replacingQuotes(str){
        str = str.trim();
        return str.replaceAll(`"`,`'`);
    }

    function addError(){
        errorText.style.opacity = 1;
        return
    }

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let newTaskId;
        let tasks = JSON.parse(localStorage.tasks);

        if (tasks.length != 0 && tasks){
            newTaskId = tasks.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1;
        } else {
            newTaskId = 0;
        }

        let newOptions = [];
        let newRightAnswers = [];
        let isOneChecked = false;
        let isAllOptionsFilled = true;

        errorText.style.opacity = 0;
        let questionText = questionInput.value;
        questionText = replacingQuotes(questionText);

        allOptionCheckboxes.forEach((checkbox) => {
            let optionText = checkbox.parentNode.querySelector('.task-option__option-text').value;
            optionText = replacingQuotes(optionText);

            if (optionText == ''){
                isAllOptionsFilled = false;
            } else {
                newOptions.push(optionText);
            }

            if (checkbox.checked){
                isOneChecked = true;
                newRightAnswers.push(optionText)
            }
        });

        if (questionText == '' || isOneChecked == false || isAllOptionsFilled == false){
            newOptions = [];
            newRightAnswers = [];
            addError();
        } else {
            let newTask = {
                id: newTaskId,
                question: questionText,
                options: newOptions,
                rightAnswers: newRightAnswers
            };
            tasks.push(newTask);
            localStorage.tasks = JSON.stringify(tasks);
            location.reload();
        }

    })
}

export default addingTasks;