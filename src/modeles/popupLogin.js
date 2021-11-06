const popup = () => {
    const buttonAuth = document.querySelector('.button-auth'),
        modalAuth = document.querySelector('.modal-auth');

    buttonAuth.addEventListener('click', () => {
        modalAuth.style.display = 'flex';
    });

};

export default popup;