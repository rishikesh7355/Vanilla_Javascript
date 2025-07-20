const container = document.getElementById('container');
const url = 'https://picsum.photos/200/300/v2/list?limit=10'
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
            // imgElement.height = '1000px';
            // imgElement.width = '1000px';
            container.appendChild(imgElement);
        })
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
getImage();