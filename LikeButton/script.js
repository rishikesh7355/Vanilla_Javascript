const likeBtn = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
const dislikeBtn = document.getElementById('dislikeButton');
const dislikeCount = document.getElementById('dislikeCount');
async function handleLikeClick(){
    likeBtn.disabled = true;
    try {
        // simulate api call to record the like
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId: 'post123'}),
        })
        if(!response.ok){
            throw new Error('Http error! status:'+ response.status);
        }
        const data = await response.json();
        console.log('Like recorded:', data);
        likeBtn.textContent = '👍 Liked';
        likeCount.textContent = '1';
        likeBtn.classList.add('liked');
    } catch (error) {
        console.error('Error liking the post:', error);
    } finally {
        likeBtn.disabled = false;
    }
}
async function handleDislikeClick(){
    dislikeBtn.disabled = true;
    try {
        // simulate api call to record the like
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId: 'post123'}),
        })
        if(!response.ok){
            throw new Error('Http error! status:'+ response.status);
        }
        const data = await response.json();
        console.log('Like recorded:', data);
        dislikeBtn.textContent = '👎 Disliked';
        dislikeCount.textContent = '1';
        dislikeBtn.classList.add('disliked');
    } catch (error) {
        console.error('Error liking the post:', error);
    } finally {
        dislikeBtn.disabled = false;
    }
}

dislikeBtn.addEventListener('click', handleDislikeClick);
likeBtn.addEventListener('click', handleLikeClick);