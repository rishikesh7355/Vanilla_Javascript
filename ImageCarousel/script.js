let list = document.querySelectorAll(".image")
console.log(list);
let currentIndex = 0,n= list.length;

function showImage(index) {
    list.forEach((img, i ) => {
        img.style.display = i === index ? "block": "none";
    })
}
showImage(currentIndex);

function goRight() {
    currentIndex = (currentIndex+1)% n;
    showImage(currentIndex);
}
function goLeft() {
    currentIndex = (currentIndex-1+n)%n;
    showImage(currentIndex);
}

document.querySelector("btn-left").addEventListener("click", goLeft);
document.querySelector("btn-right".addEventListener("click", goRight));