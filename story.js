 // Random image
 function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
// Img tag
var geti = document.getElementsByClassName("img")[0];
fetch("http://localhost:3000/posts", {
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
}).then((res) => {
    return res.json();
}).then((data) => {
    // Get a random index
    var randomIndex = getRandomIndex(data);

    var cri = document.createElement("img");
    // Get the randomly selected image URL
    var randomImageUrl = data[randomIndex].image;

    // Now, you can use randomImageUrl as the source for your image element
    cri.src = randomImageUrl;
    cri.height = "300";
    cri.width = "300";
    

    // Append the image element to the .img container
    geti.appendChild(cri);
})
var close = document.getElementsByClassName("fa fa-window-close-o")[0];
var closeButtonClicked = false;

close.addEventListener("click", () => {
    window.location.href = "./index.html";
    closeButtonClicked = true;
});

setTimeout(() => {
    if (!closeButtonClicked) {
        window.open("./index.html", "_self");
    }
}, 15000);