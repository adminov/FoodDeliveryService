const popup = () => {
    const modalAuth = document.querySelector('.modal-auth');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.button-auth')){
            modalAuth.style.display = 'flex';
        } else if (target.closest('.close-auth')){
            modalAuth.style.display = '';
        }
    });

};
popup();

//_________________________________________

const logInOut = () => {
    const btnOut = document.querySelector('.button-out'),
        userName = document.querySelector('.user-name'),
        logInForm = document.getElementById('logInForm'),
        loginInput = document.getElementById('login'),
        password = document.getElementById('password'),
        buttonAuth = document.querySelector('.button-auth'),
        modalAuth = document.querySelector('.modal-auth');


    const login = (user) => {
        buttonAuth.style.display = 'none';

        btnOut.style.display = 'flex';
        userName.style.display = 'flex';

        userName.textContent = user.login;
        modalAuth.style.display = 'none';
    };

    const logout = () => {
        buttonAuth.style.display = 'flex';

        btnOut.style.display = 'none';
        userName.style.display = 'none';

        userName.textContent = '';
        localStorage.removeItem('user');
    };

    btnOut.addEventListener('click', logout);

    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //проверка на пустату
        if (loginInput.value === '' || password.value === ''){
            alert('Введите логин или пароль')
        } else {
            // создаем объект и записывает туда значение логин и пароль от пользователей.
            const user = {
                login: loginInput.value,
                password: password.value
            };

            //сохраняем в локолсториш
            localStorage.setItem('user', JSON.stringify(user));
            login(user);
        }
    });

    //при перезагрузке страниц, получаем данные из локолсториш если они там есть.
    if (localStorage.getItem('user')){
        login(JSON.parse(localStorage.getItem('user')));
    }
};

logInOut();