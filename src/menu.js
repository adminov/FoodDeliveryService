const url = 'https://fooddeliveryservice-65195-default-rtdb.firebaseio.com/db/pizza-burger';

const renderItems = (data) => {
    data.forEach((elem) => {
        console.log(elem);
    });
};

fetch(`${url}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.error(error);
    });