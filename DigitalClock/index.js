function updateTime() {
    const now = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let h=now.getHours();
    let m=now.getMinutes();
    let s =now.getSeconds();
    let year = now.getFullYear();
    let dayName = weekday[(now.getDate()+1)%7];
    let day = (now.getDate());

    let month = months[(now.getMonth())%12]; // Months are zero-based in JavaScript

    //add a leading 0 to single digit numbers
    h= h<10 ? "0"+ h : h;
    m= m<10 ? "0"+ m: m;
    s= s<10 ? "0"+ s: s;

    const time = `${h}:${m}:${s}`;

    document.getElementById("timing").textContent = time;
    document.getElementById("YMD").textContent = `${day} ${month}, ${year} ${dayName}`;
}

updateTime();
setInterval(updateTime, 1000)