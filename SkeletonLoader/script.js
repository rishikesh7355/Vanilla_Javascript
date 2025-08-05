const card = document.querySelector('.card');
const container = document.getElementById('container');
const getCards = ()=>{
    for(let i=1;i<=10;i++){
        const item = document.createElement('div');
        item.classList.add('card');
        container.appendChild(item);

    }
}

getCards();