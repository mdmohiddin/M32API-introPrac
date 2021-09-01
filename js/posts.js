
function loadPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(postData => displayPosts(postData));
}
// loadPosts()

function displayPosts(postData) {
      // console.log(postData)
      const postContainer = document.getElementById('post')

      for (const post of postData) {
            // console.log(post)

            const div = document.createElement('div');

            div.classList.add('post')

            div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
            postContainer.appendChild(div);
            // console.log(post)
      }
}

// function displayPosts(postData) {
//       console.log(postData)
//       const ul = document.getElementById('post')

//       for (const post of postData) {
//             console.log(post.title);
      
//       const li = document.createElement('li');
//             li.innerText = `Body: ${post.body}, Title: ${post.title}`;

//             ul.appendChild(li);
// }
// }