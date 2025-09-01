/** OMDb api key:  f273a108 */

/** https://www.omdbapi.com/?i=tt3896198&apikey=f273a108 */

const movieInput = document.getElementById("movie-input")
const searchBtn = document.getElementById("search-btn")
const searchResults = document.getElementById("search-results")
const resultsPlaceholder = document.getElementById("results-placeholder")
const errorMessage = document.getElementById("movie-not-found-msg")
const addMovieBtn = document.getElementById("add-movie-btn")


searchBtn.addEventListener('click', function() {
    const movieInputFormatted = movieInput.value.split(' ').join("+")
    fetch(`https://www.omdbapi.com/?t=${movieInputFormatted}&apikey=f273a108`)
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            console.log(data.Title)
            resultsPlaceholder.classList.add("hidden")
            
            if (data.Response === "False"){
                console.log("Erro! Filme não encontrado")
                errorMessage.classList.remove("hidden")
            } 
            
            else {
                searchResults.innerHTML = 
                `
                    <div class="movie-container flex">
                        <div class="movie-poster-container">
                            <img class="movie-poster" src="${data.Poster}">
                        </div>
                        <div class="movie-info">
                            <div class="movie-header flex">
                                <p class='movie-title'>${data.Title}</p>
                                <svg class='star-icon' width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654"/>
                                </svg>
                                <p class='font-size-12 movie-rating'>${data.imdbRating}</p>
                            </div>
                            <div class="movie-details flex">
                                <p class='font-size-12'>${data.Runtime}</p>
                                <p class='font-size-12'>${data.Genre}</p>
                                <div class="flex">
                                    <svg onclick="addMovie()" id="add-movie-btn" class='add-icon' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z" fill="white"/>
                                    </svg>
                                    <p class='font-size-12'> Watchlist</p>
                                </div>
                            </div>
                            <p class="font-size-14 movie-plot">${data.Plot}</p>
                        </div>
                    </div>
                `
            }
        })
})

function addMovie() {
    console.log("movie added to watchlist!!!")
}



