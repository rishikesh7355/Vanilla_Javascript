const container = document.querySelector('.container');
const watcher = document.getElementById('watchEndOfDocument');
const max=10;
let index=0;
const generateMoreCards = () => {
    for(let i=index;i<max;i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `Card ${index+1}`;
        container.appendChild(card);
        index++;
    }
}
generateMoreCards();

const observer = new IntersectionObserver((entries) => {
    console.log(observer);
    entries.forEach((entry) => {
        if(!entry.isIntersecting)  {
            return;
        }
        generateMoreCards();
    })
})

observer.observe(watcher);