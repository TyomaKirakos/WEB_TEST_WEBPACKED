const changingNavBtns = () => {
    const authorizedBtns = document.querySelector('.authorized-btns');
    const notAuthorizedBtns = document.querySelector('.not-authorized-btns');

    if (!localStorage.currentUser){
        localStorage.setItem('currentUser', 'none');
    }
    
    if (localStorage.currentUser == 'none'){
        authorizedBtns.style.display = 'none';
        notAuthorizedBtns.style.display = 'flex';
    } else{
        authorizedBtns.style.display = 'flex';
        notAuthorizedBtns.style.display = 'none';
    }
}

export default changingNavBtns;
