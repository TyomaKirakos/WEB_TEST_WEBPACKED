const login = () => {
    const loginInput = document.querySelector('.login-input');
    const passwordInput = document.querySelector('.password-input');
    const loginBtn = document.querySelector('.login-btn');
    const errorText = document.querySelector('.submit-block__log-reg-error-text');

    const loginPattern = /^\w+$/;
    // const passwordPattern = /^[^\s]*$/;

    let users = JSON.parse(localStorage.users);
    let isLoginExist = false;

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

    loginBtn.addEventListener('click', (e) => {
        if(passwordInput.value == '' || loginInput.value == ''){
            errorText.textContent = 'Заполните все поля';
            errorText.style.display = 'block';
        } else if (loginInput.value.includes(' ') || passwordInput.value.includes(' ')){
            errorText.textContent = 'Недопустимы пробелы';
            errorText.style.display = 'block';
        } else if(!loginPattern.test(loginInput.value)){
            errorText.textContent = 'Введены недопустимые символы';
            errorText.style.display = 'block';
        } else{
            users.forEach(user => {
                if (user.login == loginInput.value.trim()){
                    isLoginExist = true;
                    if (user.password == passwordInput.value.trim()){
                        localStorage.currentUser = user.id;
                        window.location.href = 'profile.html';
                    } else{
                        errorText.textContent = 'Неверный пароль';
                        errorText.style.display = 'block';
                    }
                }
            });

            if (isLoginExist == false){
                errorText.textContent = 'Такого логина нет';
                errorText.style.display = 'block';
            }
        };
        e.preventDefault();
    })
}

export default login;