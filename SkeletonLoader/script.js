const card = document.querySelector('.card');
const container = document.getElementById('container');
const getCards = ()=>{
    for(let i=0;i<10;i++){
        const item = document.createElement('div');
        item.classList.add('card');
        container.appendChild(item);

    }
}

getCards();

const imgUrl = 'https://picsum.photos/v2/list?page=2&limit=10';
const getImages =  async () => {
    setTimeout(async () =>{
        const res = await fetch(imgUrl);
        const data = await res.json();
        console.log(data);
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.innerHTML = '';
            card.style.animation = 'none';
            const img = document.createElement('img');
            img.src = data[index].download_url;
            img.style.height = '300px';
            img.style.width = '200px';
            card.appendChild(img);
        });
},3000);
};
getImages();