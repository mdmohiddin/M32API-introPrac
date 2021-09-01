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
            .then(data => displayUsers(data));
}
// loadPost()

function displayUsers(data) {
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
            .then(MuhammedUser => console.log(MuhammedUser))
}
// loadUser()

function loadComments() {
      fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(MoHi_Data => console.log(MoHi_Data))
}
// loadComments()
