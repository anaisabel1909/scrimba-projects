let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

function add1PointHome() {
    console.log("It's clicking")
    homePoints += 1
    homeScore.textContent = homePoints
}

function add2PointsHome() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function add3PointsHome() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function add1PointGuest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function add2PointsGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function add3PointsGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints

}