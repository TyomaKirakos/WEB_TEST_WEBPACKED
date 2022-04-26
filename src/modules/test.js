const test = (tasks, currentTasks) => {
    const linkBlock = document.querySelector('.link-block-without-stopwatch');
    const linkWithStopwatchBlock = document.querySelector('.test-page-link-to-main');
    const testBlock = document.querySelector('.test-page__tasks-block');
    const finishBtn = document.querySelector('.test-page__finish-btn');
    const mainPart = document.querySelector('.main__content');
    const testPage = document.querySelector('.test-page');

    let users = JSON.parse(localStorage.users);
    let currentUser = localStorage.currentUser;

    let score;
    let maxRightAnswers;
    let percentScore;
    let timeOfTest;

    linkBlock.style.display = 'none';

    // расчет результатов
    function calculatingResults(){
        score = 0;
        maxRightAnswers = 0;
        let optionsBlocks = document.querySelectorAll('.task-options');
    
        // Вычисление общего кол-ва правильных ответов
        currentTasks.forEach(currentTask => {
            maxRightAnswers += currentTask.rightAnswers.length;
        })

        // перебор всех блоков с вариантами ответов
        optionsBlocks.forEach(optionsBlock => {
            // Нахождение айди текущего блока с вариантами ответов
            let currentId = optionsBlock.id;
            currentId = currentId.split('_');
            currentId = currentId[currentId.length-1];

            let options = optionsBlock.querySelectorAll('.task-option__input');
            options.forEach(option => {
                if (option.checked){
                    let currentTask = currentTasks.find(task => task.id == currentId);
                    if (option.classList.contains('task-option__radio-input')){
                        if (option.value == currentTask.rightAnswers[0]){
                            score++;
                        }
                    } else{
                        if (option.value == currentTask.rightAnswers[0] || option.value == currentTask.rightAnswers[1] || option.value == currentTask.rightAnswers[2] || option.value == currentTask.rightAnswers[3]){
                            score++;
                        }
                    }
                }
            })   
        })

        percentScore = Math.round(100 / maxRightAnswers * score);

        timeOfTest = document.querySelector('.test-stopwatch').textContent;

        generatingResultPage();
    }

    // генерация страницы с результатами
    function generatingResultPage(){
        linkBlock.style.display = 'block';
        linkWithStopwatchBlock.style.display = 'none';

        let resultPage = document.createElement('div');
        resultPage.classList.add('main__result-page', 'result-page');

        if (percentScore >= 60){
            resultPage.innerHTML = `<div class="result-page__results-block results-block">
            <div class="results-block__result-text result-text">
                <h1 class="result-text__heading big-heading">Ваш результат</h1>
                <div class="result-text__result-info result-info">
                    <div class="result-info__result-percent-block result-percent-block">
                        <p class="result-percent-block__percent"><span class="percent__percent-number">${percentScore}</span>%</p>
                        <div class="result-percent-block__percent-diagram percent-diagram">
                            <div class="percent-diagram__percent-line"></div>
                        </div>
                    </div>
                    <p class="result-info__text-info just-text">
                        Правильные ответы <span class="text-info__right-answers-num">${score}</span>/<span class="text-info__all-answers-num">${maxRightAnswers}</span>
                    </p>
                    <p class="result-info__text-info just-text">
                        Время прохождения <span class="text-info__time">${timeOfTest}</span>
                    </p>
                </div>
            </div>
            <img src="img/tests-results/good-result.svg" alt="Хороший результат!" class="results-block__result-img img">
        </div>
        <div class="result-page__result-block-btns result-block-btns btns-block">
            <a href="index.html" class="result-block-btns__end-btn end-btn">Завершить</a>
            <a href="start-marathon-test.html" class="result-block-btns__retake-test-btn retake-marathon-test-btn btn">Пройти ещё раз</a>
            <a href="best-results.html" class="results-btn btn result-block-btns__results-btn">Лучшие результаты</a>
        </div>`
        } else{
            resultPage.innerHTML = `<div class="result-page__results-block results-block">
            <div class="results-block__result-text result-text">
                <h1 class="result-text__heading big-heading">Ваш результат</h1>
                <div class="result-text__result-info result-info">
                    <div class="result-info__result-percent-block result-percent-block">
                        <p class="result-percent-block__percent"><span class="percent__percent-number">${percentScore}</span>%</p>
                        <div class="result-percent-block__percent-diagram percent-diagram">
                            <div class="percent-diagram__percent-line"></div>
                        </div>
                    </div>
                    <p class="result-info__text-info just-text">
                        Правильные ответы <span class="text-info__right-answers-num">${score}</span>/<span class="text-info__all-answers-num">${maxRightAnswers}</span>
                    </p>
                    <p class="result-info__text-info just-text">
                        Время прохождения <span class="text-info__time">${timeOfTest}</span>
                    </p>
                </div>
            </div>
            <img src="img/tests-results/bad-result.svg" alt="Ты можешь лучше!" class="results-block__result-img img">
        </div>
        <div class="result-page__result-block-btns result-block-btns btns-block">
            <a href="index.html" class="result-block-btns__end-btn end-btn">Завершить</a>
            <a href="start-marathon-test.html" class="result-block-btns__retake-test-btn retake-marathon-test-btn btn">Пройти ещё раз</a>
            <a href="best-results.html" class="results-btn btn result-block-btns__results-btn">Лучшие результаты</a>
        </div>`
        }

        testPage.remove();
        mainPart.append(resultPage);

        let percentLine = document.querySelector('.percent-diagram__percent-line');
        percentLine.style.width = `${percentScore}%`;
        window.scrollTo(0, 0);

        users[currentUser].lastResult = percentScore;
        if (users[currentUser].bestResult <= percentScore){
            users[currentUser].bestResult = percentScore;
            users[currentUser].bestResultTime = timeOfTest.trim();
        }

        localStorage.users = JSON.stringify(users);
    }

    // генерация карточек с заданиями
    currentTasks.forEach((task, index) => {
        let taskBlock = document.createElement('div');
        taskBlock.classList.add(`test-page__task-block`, `task-block`, `task-order_${index}`);
        taskBlock.setAttribute('id', `taskId_${task.id}`);
        taskBlock.innerHTML = `<xmp class="task-block__task-text blue-bold-text">${task.question}</xmp>`;
        if (task.rightAnswers.length == 1){
            taskBlock.innerHTML += `<div class="task-block__task-options task-options" id="task-options_${task.id}">
            
            <label for="task${task.id}_0" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input type="radio" class="task-option__radio-input task-option__input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>
            </div>`;
        } else {
            taskBlock.innerHTML += `<div class="task-block__task-options task-options" id="task-options_${task.id}">
            <label for="task${task.id}_0" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[0]}" id="task${task.id}_0"><xmp class="task-option__option-text just-text">${task.options[0]}</xmp></label>

            <label for="task${task.id}_1" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[1]}" id="task${task.id}_1"><xmp class="task-option__option-text just-text">${task.options[1]}</xmp></label>

            <label for="task${task.id}_2" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[2]}" id="task${task.id}_2"><xmp class="task-option__option-text just-text">${task.options[2]}</xmp></label>
            
            <label for="task${task.id}_3" class="task-options__task-option"><input type="checkbox" class="task-option__checkbox task-option__input" name="taskId_${task.id}" value="${task.options[3]}" id="task${task.id}_3"><xmp class="task-option__option-text just-text">${task.options[3]}</xmp></label>
            </div>`;
        }

        taskBlock.innerHTML += '</div>';
        testBlock.append(taskBlock);

        // генерация номеров страниц
        // let taskPageBtn = document.createElement('button');
        // taskPageBtn.classList.add('tasks-pagination__task-number', 'btn', `task-order_${index}`);
        // taskPageBtn.textContent = index + 1;
        // testPagination.append(taskPageBtn);
    });

    // Заканчивание теста
    finishBtn.addEventListener('click', calculatingResults);
}

export default test;