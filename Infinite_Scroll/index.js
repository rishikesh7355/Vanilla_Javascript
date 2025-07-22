const container = document.getElementById('container');
const url = 'https://picsum.photos/v2/list/?limit=10';
let i=0;
const getImage = async () => {
    try {
        const response =await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        data.forEach( img => {
            const imgElement = document.createElement('img');
            imgElement.src = img.download_url;
            imgElement.style.height = '300px';
            imgElement.style.width = '300px';
            container.appendChild(imgElement);
        })
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
getImage();

window.addEventListener('scroll', () => {
    console.log(window.innerHeight);
    // hidden not visible to us
    console.log(window.scrollY);
    // offsetHeight is the height of the entire document
    // scrollHeight is the height of the content that can be scrolled
    // scrollHeight and offset height are coming same here
    console.log(document.body.offsetHeight);
    console.log(document.body.scrollHeight);
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        console.log('loading ...');
        getImage();
    }
})