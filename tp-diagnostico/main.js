// Peticiones a la URL
fetch('http://localhost:3000/provincia/all')
    .then(response =>  response.json())
    .then(data => {console.log(data)});