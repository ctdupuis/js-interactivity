

const addMovie = event => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    // debugger
    movieTitle.innerText = event.target.children[0].value;
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie);
    inputField.value = ""
}

document.querySelector('form').addEventListener('submit', addMovie)
