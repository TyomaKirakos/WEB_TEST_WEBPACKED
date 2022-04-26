const testDirecting = () => {
    const directFastTest = document.querySelector('.fast-test-btn');
    const directMarathonTest = document.querySelector('.marathon-btn');
    const directBestResultTable = document.querySelector('.welcome-block-btns__result-btn');
    const body = document.querySelector('body');
    
    let tasks = JSON.parse(localStorage.tasks);

    function directing(link, msg){
        if (localStorage.currentUser == 'none'){
            modalAppearance(msg);
        } else if (tasks.length < 5){
            modalAppearance('Тест пройти не получится :( В нашей базе по какой-то причине недостаточно заданий!');
        } else{
            window.location.href = link;
        }
    }

    function modalAppearance (message){
        if (document.querySelector('.modal')){
            let modalMsg = document.querySelector('.modal');
            modalMsg.remove()
        }

        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = '<p class="modal__text just-text">' + message + '</p>';
        body.append(modal);
        setTimeout(
            () => {
                modal.remove();
            }
            , 2000
        );
    }

    directFastTest.addEventListener('click', () => {
        directing('start-fast-test.html', 'Войдите или зарегистрируйтесь, чтобы пройти быстрый тест!')
    });

    directMarathonTest.addEventListener('click', () => {
        directing('start-marathon-test.html', 'Войдите или зарегистрируйтесь, чтобы пройти марафон!')
    });

    directBestResultTable.addEventListener('click', () => {
        if (localStorage.currentUser == 'none'){
            modalAppearance('Войдите или зарегистрируйтесь, чтобы увидеть таблицу лучших результатов!');
        } else{
            window.location.href = 'best-results.html';
        }
    });
}

export default testDirecting;