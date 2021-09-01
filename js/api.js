// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function loadData() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(mohi => console.log(mohi))
  
}

// Me practice

function loadPost() {
      fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => displayPost(data));
}
// loadPost()

function displayPost(data) {
      console.log(data);
}

// Me practice

function loadAlbum() {
      fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(dataMohi => console.log(dataMohi))
}
// loadAlbum()

function loadUser() {
      fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(user => console.log(user))
            .then(data => displayUsers(data));
}
// loadUser()
function displayUsers(data) {
      // console.log(data)
      const ul = document.getElementById('users')
            // কাজ-১ (আনঅর্ডার লিস্ট তৈরি করার জন্য)
      
      for (const user of data) {
            console.log(user);

            const li = document.createElement('li');
            // কাজ-২ (একটি করে লিস্ট বানানোর জন্য)

            // li.innerText = user.name;
            // dynami ভাবে নামগুলো লিস্ট আকারে দেখাবে

            li.innerText = `Name: ${user.name} E-mail: ${user.email}`

            // কাজ-৩ (লিস্টের মধ্যে নাম গুলো টেক্স আকারে থাকবে বলে)

            ul.appendChild(li);
            // কাজ-৪ (ইউএল একটি করে চাইল্ড তৈরি করার জন্য)
      }
}


function loadComments() {
      fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            // .then(MoHi_Data => console.log(MoHi_Data))
            .then(data => displayComments(data));
}
// loadComments()
function displayComments(comments) {
      // console.log(data);
      for (const comment of comments) {
            console.log(comment)
            console.log(comment.email)
      }
}