const container = document.querySelector('.container');
const watcher = document.getElementById('watchEndOfDocument');
const max=10;
let index=0;
const generateMoreCards = () => {
    for(let i=index;i<index + max;i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `Card ${i}`;
        container.appendChild(card);
    }
    index += max;
}

const observer = new IntersectionObserver((entries) => {
    // console.log(observer);
    entries.forEach((entry) => {
        if(!entry.isIntersecting)  {
            return;
        }
        generateMoreCards();
    })
})

observer.observe(watcher);
generateMoreCards();