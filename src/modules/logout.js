const logout = () => {
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('logout-btn')){
            localStorage.currentUser = 'none';
            window.location.href = 'index.html';
        }
    })
}

export default logout;