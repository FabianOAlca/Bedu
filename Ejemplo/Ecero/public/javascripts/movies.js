//import { response } from "express";


function fetchMovies(){
    fetch('http://localhost:3000/movies')
    .then((response) => response.json())
    .then((json) => renderMovie(json.movies))
    .catch((error) => console.log(error))
}

function renderMovie(movies){
    for(const movie of movies){
       const texTag = generateTextTag()
       texTag.innerText = movie.title
       document.body.appendChild(texTag)
    }
}

function generateTextTag(){
    const tag = document.createElement('p')
    return tag
}

function setListeners(){
    const button = document.getElementById('fetch-button')
    button.addEventListener('click',fetchMovies)
}

setListeners()