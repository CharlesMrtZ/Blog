const url = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10";

const postsContainer = document.querySelector('#posts-container');
const loading = document.querySelector('#loading');

async function getPosts() {
    const response = await fetch(url);
    const posts = await response.json();

    loading.classList.add('hide');

    posts.map((post) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const button = document.createElement('button');

        div.classList.add('div-post');
        title.classList.add('post-title');
        body.classList.add('post-body');
        button.classList.add('post-button');

        title.innerText = post.title;
        body.innerText = post.body;
        button.innerText = "Ler";
        button.setAttribute('href', `/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(button);

        postsContainer.appendChild(div);
    });
    
};

getPosts();