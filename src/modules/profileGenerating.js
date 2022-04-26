const profileGenerating = () => {
    const usersLogin = document.querySelector('.login-info');
    const usersLevel = document.querySelector('.level-info');
    const usersBestResult = document.querySelector('.best-result');
    const usersLastResult = document.querySelector('.last-result');
    const usersTimeOfBest = document.querySelector('.time-of-best');

    const editTasksBtn = document.querySelector('.edit-tasks-btn');

    let users = JSON.parse(localStorage.users);

    let currentUser = users.find(user => user.id == localStorage.currentUser);

    usersLogin.textContent = currentUser.login;
    usersBestResult.textContent = currentUser.bestResult + '%';
    usersLastResult.textContent = currentUser.lastResult + '%';
    usersTimeOfBest.textContent = currentUser.bestResultTime;

    if (currentUser.role == 1){
        usersLevel.textContent = 'Администратор';
        editTasksBtn.style.display = 'block';
    } else {
        usersLevel.textContent = 'Пользователь';
        editTasksBtn.style.display = 'none';
    }
}

export default profileGenerating;