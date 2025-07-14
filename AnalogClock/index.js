const secondHand = document.getElementById('second');
const minHand = document.getElementById('min');
const hourHand = document.getElementById('hour');

window.addEventListener('load', () => {
    setInterval(() => {
    const date = new Date();
    const s= date.getSeconds();
    const m= date.getMinutes();
    const h = date.getHours();

    let rotateH = (h%12) * 30 + (m/60) * 30;
    let rotateM = m* 6;
    let rotateS = s*6;

    hourHand.style.transform = `rotate(${rotateH}deg)`;
    minHand.style.transform = `rotate(${rotateM}deg)`;
    secondHand.style.transform = `rotate(${rotateS}deg)`

    
},1000);
})