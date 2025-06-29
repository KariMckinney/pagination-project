//part 1
function fetchposts(page) {
    fetch('https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
}

//part 2
renderPosts(posts); {
    const postsContainer = document.getElementById ('posts-container');
    postsContainer.innerHTML = '';
    posts.forEach (post => {
        createPostElement(post); });
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML =  `
      <h2>${post.title}</h2>
      <p>${post.body}</p>  `;
    postsContainer.appendChild(postElement);
}

//part3
