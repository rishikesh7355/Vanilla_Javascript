function updateTime() {
    const now = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let h=now.getHours();
    let m=now.getMinutes();
    let s =now.getSeconds();
    let year = now.getFullYear();
    let day = weekday[now.getDate()+1];
    let month = months[now.getMonth()]; // Months are zero-based in JavaScript

    console.log(year);
    console.log(day);
    console.log(month);

    //add a leading 0 to single digit numbers
    h= h<10 ? "0"+ h : h;
    m= m<10 ? "0"+ m: m;
    s= s<10 ? "0"+ s: s;

    const time = `${month},${year},${day} ${h}:${m}:${s}`;

    document.getElementById("DigitalClock").textContent = time;
}

updateTime();
setInterval(updateTime, 1000)