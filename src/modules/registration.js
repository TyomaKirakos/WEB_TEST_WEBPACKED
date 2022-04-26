const registration = () => {
    const loginInput = document.querySelector('.login-input');
    const passwordInput = document.querySelector('.password-input');
    const registrationBtn = document.querySelector('.register-btn');
    const loginErrorText = document.querySelector('.incorrect-log-error');
    const passwordErrorText = document.querySelector('.incorrect-pswd-error');

    const loginPattern = /^\w+$/;
    const passwordPattern = /^[^\s]*$/;

    let isLoginUsed = false;
    let users = JSON.parse(localStorage.users);

    localStorage.currentUser = 'none';

    loginInput.addEventListener('input', function(){
        if(loginInput.value[loginInput.value.length-1] == ' '){
            loginInput.value = loginInput.value.slice(0, -1);
        }
    })

    passwordInput.addEventListener('input', function(){
        if(passwordInput.value[passwordInput.value.length-1] == ' '){
            passwordInput.value = passwordInput.value.slice(0, -1);
        }
    })

    registrationBtn.addEventListener('click', (e) => {
        loginErrorText.style.display = 'none';
        passwordErrorText.style.display = 'none';

        if(loginInput.value == ''){
            loginErrorText.textContent = 'Введите логин';
            loginErrorText.style.display = 'block';
        } else if(loginInput.value.length < 5 || loginInput.value.length > 20) {
            loginErrorText.textContent = 'Логин от 5 до 20 символов';
            loginErrorText.style.display = 'block';
        } else if (loginInput.value.includes(' ')){
            loginErrorText.textContent = 'Недопустимы пробелы';
            loginErrorText.style.display = 'block';
        } else if(!loginPattern.test(loginInput.value)){
            loginErrorText.textContent = 'Недопустимые символы';
            loginErrorText.style.display = 'block';
        };
        
        if(passwordInput.value == ''){
            passwordErrorText.textContent = 'Введите пароль';
            passwordErrorText.style.display = 'block';
        } else if(passwordInput.value.length < 5 || passwordInput.value.length > 40) {
            passwordErrorText.textContent = 'Пароль от 5 до 40 символов';
            passwordErrorText.style.display = 'block';
        } else if(passwordInput.value.includes(' ')){
            passwordErrorText.textContent = 'Недопустимы пробелы';
            passwordErrorText.style.display = 'block';
        };

        users.forEach(user => {
            if (user.login == loginInput.value.trim()){
                isLoginUsed = true;
            } 
        });

        if (!isLoginUsed){
            if(loginInput.value.length >= 5 && passwordInput.value.length >= 5 && loginInput.value.length <= 20 && passwordInput.value.length <= 40 && loginPattern.test(loginInput.value) && passwordPattern.test(passwordInput.value)){
                let user = {
                    id: users.length,
                    role: 0,
                    login: loginInput.value.trim(),
                    password: passwordInput.value.trim(),
                    bestResult: 0,
                    lastResult: 0,
                    bestResultTime: '0:00'
                };
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.currentUser = user.id;
                window.location.href = 'profile.html';
            };
        } else {
            loginErrorText.textContent = 'Логин уже занят';
            loginErrorText.style.display = 'block';
        }

        e.preventDefault();
    })
}

export default registration;