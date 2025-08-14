const likeBtn = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
async function handleClick(){
    likeBtn.disabled = true;
    try {
        // simulate api call to record the like
        const response = await fetch('/api/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId: 'post123'}),
        })
        if(!response.ok){
            throw new Error('Http error! status:'+ response.status);
        }
        const dataa = await response.json();
        likeCount.textContent = dataa.newLikeCount;
        likeBtn.classList.add('liked');
    } catch (error) {
        console.error('Error liking the post:', error);
    } finally {
        likeBtn.disabled = false;
    }
}


likeBtn.addEventListener('click', handleClick);