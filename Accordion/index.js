const headersId = document.querySelectorAll('.accordion-header');
headersId.forEach(header => {
    header.addEventListener("click", ()=> {
    let body = header.querySelector(".accordion-body");
    if(body) {
        body.classList.toggle("active")
    }
});
});