const checkLocalStorage = () => {
    if (!localStorage.users){
        let admin = {
            id: 0,
            role: 1,
            login: 'Admin',
            password: 'admin',
            bestResult: 0,
            lastResult: 0,
            bestResultTime: '0:00'
        };
        
        localStorage.setItem('users', JSON.stringify([admin]));
    }
    
}

export default checkLocalStorage;