const openingModalAddingTask = () => {
    const openModalBtn = document.querySelector('.add-task-btn');
    const modalArea = document.querySelector('.modal-area');

    openModalBtn.addEventListener('click', () => {
        modalArea.style.display = 'grid';
    })

    modalArea.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-window__close-btn') || e.target.classList.contains('modal-area')){
            modalArea.style.display = 'none';
        }
    })
}

export default openingModalAddingTask;