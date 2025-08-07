const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

posts.forEach(post => {
    let likes = post.likes
    let liked = false
    
    const feed = document.getElementById("feed")
    
    const postEl = document.createElement("section")
    postEl.classList.add("post-section")
    
    postEl.innerHTML = 
    `<div class="profile">
        <img class="profile-pic" id ="profile-pic" src="${post.avatar}">
        <div class="profile-info">
            <h3 id="name">${post.name}</h3>
            <p id="location">${post.location}<p>
        </div>
    </div>
    <img class="post-img" id="post-img" src="${post.post}">
    <div class="post-main-section">
        <img class="post-icon" id="heart-icon" alt="oldagram heart icon" src="images/icon-heart.png">
        <img class="post-icon" alt="oldagram comment icon" src="images/icon-comment.png">
        <img class="post-icon" alt="oldagram dm icon" src="images/icon-dm.png">
        <h4 id="post-likes">${post.likes} likes</h4>
        <p><span class="username">${post.username}</span> ${post.comment}</p>
        </div>
    </div>`
    
   feed.append(postEl)
    
    const likeText = postEl.querySelector("#post-likes")
    const postImage = postEl.querySelector("#post-img")
    const heartIcon = postEl.querySelector("#heart-icon")

    function toggleLike() {
        liked = !liked

        if (liked) {
            likes++
            heartIcon.src = "images/like.jpg"
            heartIcon.classList.add("animate-like")
        } else {
            likes--
            heartIcon.src = "images/icon-heart.png"
        }

        likeText.textContent = `${likes} likes`

        setTimeout(() => {
            heartIcon.classList.remove("animate-like")
        }, 300)
    }

    heartIcon.addEventListener("click", toggleLike)
    postImage.addEventListener("dblclick", () => {
        if (!liked) toggleLike()
    })
})