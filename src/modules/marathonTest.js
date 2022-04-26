import test from './test.js'

let marathonTest = () => {
    let tasks = JSON.parse(localStorage.tasks); // 
    let currentTasks = []; //

    // Отбор заданий в случайном пордяке
    for (let i = 0; i < JSON.parse(localStorage.tasks).length; i++){
        let taskNumber = Math.floor(Math.random() * (tasks.length));
        currentTasks.push(tasks[taskNumber]);
        tasks.splice(taskNumber, 1);
    }

    test(tasks, currentTasks);
}

export default marathonTest;